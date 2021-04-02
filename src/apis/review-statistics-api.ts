/* tslint:disable */
/* eslint-disable */
/**
 * WaniKani
 * WaniKani: The API
 *
 * OpenAPI spec version: 20170710.0
 * 
 *
 */
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';
import { BaseError } from '../../models';
import { ReviewStatistic } from '../../models';
import { ReviewStatistics } from '../../models';
import { SubjectType } from '../../models';
/**
 * ReviewStatisticsApi - axios parameter creator
 * @export
 */
export const ReviewStatisticsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves a specific review statistic by its id.
         * @summary Get a Specific Review Statistic
         * @param {number} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReviewStatistic: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getReviewStatistic.');
            }
            const localVarPath = `/review_statistics/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a collection of all review statistics, ordered by ascending created_at, 500 at a time.
         * @summary Get All Review Statistics
         * @param {Array&lt;number&gt;} [ids] Only reviews where data.id matches one of the array values are returned.
         * @param {string} [updatedAfter] Only reviews updated after this time are returned.
         * @param {boolean} [hidden] Return review statistics with a matching value in the hidden attribute
         * @param {Array&lt;number&gt;} [subjectIds] Only reviews where data.subject_id matches one of the array values are returned.
         * @param {Array&lt;SubjectType&gt;} [subjectTypes] Only review statistics where data.subject_type matches one of the array values are returned. Valid values are: radical, kanji, or vocabulary.
         * @param {number} [percentagesGreaterThan] Return review statistics where the percentage_correct is greater than the value.
         * @param {number} [percentagesLessThan] Return review statistics where the percentage_correct is less than the value.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReviewStatistics: async (ids?: Array<number>, updatedAfter?: string, hidden?: boolean, subjectIds?: Array<number>, subjectTypes?: Array<SubjectType>, percentagesGreaterThan?: number, percentagesLessThan?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/review_statistics`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            if (ids) {
                localVarQueryParameter['ids'] = ids;
            }

            if (updatedAfter !== undefined) {
                localVarQueryParameter['updated_after'] = (updatedAfter as any instanceof Date) ?
                    (updatedAfter as any).toISOString().substr(0,10) :
                    updatedAfter;
            }

            if (hidden !== undefined) {
                localVarQueryParameter['hidden'] = hidden;
            }

            if (subjectIds) {
                localVarQueryParameter['subject_ids'] = subjectIds;
            }

            if (subjectTypes) {
                localVarQueryParameter['subject_types'] = subjectTypes;
            }

            if (percentagesGreaterThan !== undefined) {
                localVarQueryParameter['percentages_greater_than'] = percentagesGreaterThan;
            }

            if (percentagesLessThan !== undefined) {
                localVarQueryParameter['percentages_less_than'] = percentagesLessThan;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ReviewStatisticsApi - functional programming interface
 * @export
 */
export const ReviewStatisticsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieves a specific review statistic by its id.
         * @summary Get a Specific Review Statistic
         * @param {number} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getReviewStatistic(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReviewStatistic>> {
            const localVarAxiosArgs = await ReviewStatisticsApiAxiosParamCreator(configuration).getReviewStatistic(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns a collection of all review statistics, ordered by ascending created_at, 500 at a time.
         * @summary Get All Review Statistics
         * @param {Array&lt;number&gt;} [ids] Only reviews where data.id matches one of the array values are returned.
         * @param {string} [updatedAfter] Only reviews updated after this time are returned.
         * @param {boolean} [hidden] Return review statistics with a matching value in the hidden attribute
         * @param {Array&lt;number&gt;} [subjectIds] Only reviews where data.subject_id matches one of the array values are returned.
         * @param {Array&lt;SubjectType&gt;} [subjectTypes] Only review statistics where data.subject_type matches one of the array values are returned. Valid values are: radical, kanji, or vocabulary.
         * @param {number} [percentagesGreaterThan] Return review statistics where the percentage_correct is greater than the value.
         * @param {number} [percentagesLessThan] Return review statistics where the percentage_correct is less than the value.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getReviewStatistics(ids?: Array<number>, updatedAfter?: string, hidden?: boolean, subjectIds?: Array<number>, subjectTypes?: Array<SubjectType>, percentagesGreaterThan?: number, percentagesLessThan?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReviewStatistics>> {
            const localVarAxiosArgs = await ReviewStatisticsApiAxiosParamCreator(configuration).getReviewStatistics(ids, updatedAfter, hidden, subjectIds, subjectTypes, percentagesGreaterThan, percentagesLessThan, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ReviewStatisticsApi - factory interface
 * @export
 */
export const ReviewStatisticsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieves a specific review statistic by its id.
         * @summary Get a Specific Review Statistic
         * @param {number} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReviewStatistic(id: number, options?: any): AxiosPromise<ReviewStatistic> {
            return ReviewStatisticsApiFp(configuration).getReviewStatistic(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a collection of all review statistics, ordered by ascending created_at, 500 at a time.
         * @summary Get All Review Statistics
         * @param {Array&lt;number&gt;} [ids] Only reviews where data.id matches one of the array values are returned.
         * @param {string} [updatedAfter] Only reviews updated after this time are returned.
         * @param {boolean} [hidden] Return review statistics with a matching value in the hidden attribute
         * @param {Array&lt;number&gt;} [subjectIds] Only reviews where data.subject_id matches one of the array values are returned.
         * @param {Array&lt;SubjectType&gt;} [subjectTypes] Only review statistics where data.subject_type matches one of the array values are returned. Valid values are: radical, kanji, or vocabulary.
         * @param {number} [percentagesGreaterThan] Return review statistics where the percentage_correct is greater than the value.
         * @param {number} [percentagesLessThan] Return review statistics where the percentage_correct is less than the value.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReviewStatistics(ids?: Array<number>, updatedAfter?: string, hidden?: boolean, subjectIds?: Array<number>, subjectTypes?: Array<SubjectType>, percentagesGreaterThan?: number, percentagesLessThan?: number, options?: any): AxiosPromise<ReviewStatistics> {
            return ReviewStatisticsApiFp(configuration).getReviewStatistics(ids, updatedAfter, hidden, subjectIds, subjectTypes, percentagesGreaterThan, percentagesLessThan, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ReviewStatisticsApi - object-oriented interface
 * @export
 * @class ReviewStatisticsApi
 * @extends {BaseAPI}
 */
export class ReviewStatisticsApi extends BaseAPI {
    /**
     * Retrieves a specific review statistic by its id.
     * @summary Get a Specific Review Statistic
     * @param {number} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReviewStatisticsApi
     */
    public getReviewStatistic(id: number, options?: any) {
        return ReviewStatisticsApiFp(this.configuration).getReviewStatistic(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a collection of all review statistics, ordered by ascending created_at, 500 at a time.
     * @summary Get All Review Statistics
     * @param {Array&lt;number&gt;} [ids] Only reviews where data.id matches one of the array values are returned.
     * @param {string} [updatedAfter] Only reviews updated after this time are returned.
     * @param {boolean} [hidden] Return review statistics with a matching value in the hidden attribute
     * @param {Array&lt;number&gt;} [subjectIds] Only reviews where data.subject_id matches one of the array values are returned.
     * @param {Array&lt;SubjectType&gt;} [subjectTypes] Only review statistics where data.subject_type matches one of the array values are returned. Valid values are: radical, kanji, or vocabulary.
     * @param {number} [percentagesGreaterThan] Return review statistics where the percentage_correct is greater than the value.
     * @param {number} [percentagesLessThan] Return review statistics where the percentage_correct is less than the value.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReviewStatisticsApi
     */
    public getReviewStatistics(ids?: Array<number>, updatedAfter?: string, hidden?: boolean, subjectIds?: Array<number>, subjectTypes?: Array<SubjectType>, percentagesGreaterThan?: number, percentagesLessThan?: number, options?: any) {
        return ReviewStatisticsApiFp(this.configuration).getReviewStatistics(ids, updatedAfter, hidden, subjectIds, subjectTypes, percentagesGreaterThan, percentagesLessThan, options).then((request) => request(this.axios, this.basePath));
    }
}
