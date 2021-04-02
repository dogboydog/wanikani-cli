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

import { ICommandDefinition } from "@zowe/imperative";
import {CommonOptions} from "../../common-options";

/**
 * This object defines the top level command group for zosfiles. This is not
 * something that is intended to be used outside of this npm package.
 *
 * @private
 */
export const ListReviewsDefinition: ICommandDefinition = {
    name: "reviews",
    aliases: ["rv"],
    type: "command",
    summary: "List reviews for your account",
    description: "List reviews for your account",
    profile:
    {
        optional: [ 'wanikani']
    },
    options: [
        CommonOptions.TOKEN_OPTION
    ],
    outputFormatOptions: true,
    handler: __dirname + '/list-reviews.handler'
};