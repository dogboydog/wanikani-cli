/*
* This program and the accompanying materials are made available under the terms of the
* Eclipse Public License v2.0 which accompanies this distribution, and is available at
* https://www.eclipse.org/legal/epl-v20.html
*
* SPDX-License-Identifier: EPL-2.0
*
* Copyright Contributors to the Zowe Project.
*
*/
import { ReviewStatisticsApiAxiosParamCreator } from '../../../apis';
import { IHandlerParameters, ICommandHandler } from "@zowe/imperative";
import axios from 'axios';
import { WaniKaniRequest } from '../../wanikani-request';
import { Review } from '../../../../models/review';

/**
 * Command handler for listing reviews
 * @export
 * @class ListReviewsHandler
 * @implements {ICommandHandler}
 */
export default class ListReviewsHandler implements ICommandHandler {

    /**
     * Command handler process - invoked by the command processor to handle the "zos-jobs delete job"
     * @param {IHandlerParameters} params - Command handler parameters
     * @returns {Promise<void>} - Fulfilled when the command completes successfully OR rejected with imperative error
     * @memberof JobHandler
     */
    public async process(params: IHandlerParameters): Promise<void> {
        var creator = ReviewStatisticsApiAxiosParamCreator();
        const reviewsResponse = await (WaniKaniRequest.makeRequest(await creator.getReviewStatistics(), params.arguments));

        const flattenedData: any[] = reviewsResponse.data.data.map((entry: Review) => {
            const flat: any = {
                id: entry.id
            };
            for (const key of Object.keys(entry.data)) {
                flat[key] = entry.data[key];
            }
            return flat;
        });
        /*
                Example request
                "data": {
                            "created_at": "2015-06-25T12:02:10.316551Z",
                            "subject_id": 476,
                            "subject_type": "kanji",
                            "meaning_correct": 8,
                            "meaning_incorrect": 0,
                            "meaning_max_streak": 8,
                            "meaning_current_streak": 8,
                            "reading_correct": 8,
                            "reading_incorrect": 0,
                            "reading_max_streak": 8,
                            "reading_current_streak": 8,
                            "percentage_correct": 100,
                            "hidden": false
                        }
    */
        params.response.data.setObj(flattenedData);

        params.response.format.output({
            output: flattenedData,
            format: 'table',
            fields: ['subject_id', 'subject_type', 'percentage_correct']
        })
    }
}