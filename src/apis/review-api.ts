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
import { CreateReviewRequest } from '../../models';
import { CreateReviewResponse } from '../../models';
import { Review } from '../../models';
import { Reviews } from '../../models';
/**
 * ReviewApi - axios parameter creator
 * @export
 */
export const ReviewApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a review for a specific assignment_id. Using the related subject_id is also a valid alternative to using assignment_id.  Some criteria must be met in order for a review to be created: available_at must be not null and in the past.  When a review is registered, the associated assignment and review_statistic are both updated. These are returned in the response body under resources_updated.
         * @summary Create a review
         * @param {CreateReviewRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createReview: async (body?: CreateReviewRequest, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/reviews`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            localVarHeaderParameter['Content-Type'] = 'application/json';

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
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a specific review by its id.
         * @summary Get a Specific Review
         * @param {number} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReview: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getReview.');
            }
            const localVarPath = `/reviews/{id}`
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
         * Returns a collection of all reviews, ordered by ascending created_at, 500 at a time.
         * @summary Get All Reviews
         * @param {Array&lt;number&gt;} [ids] Only reviews where data.id matches one of the array values are returned.
         * @param {string} [updatedAfter] Only reviews updated after this time are returned.
         * @param {Array&lt;number&gt;} [assignmentIds] Only reviews where data.assignment_id matches one of the array values are returned.
         * @param {Array&lt;number&gt;} [subjectIds] Only reviews where data.subject_id matches one of the array values are returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReviews: async (ids?: Array<number>, updatedAfter?: string, assignmentIds?: Array<number>, subjectIds?: Array<number>, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/reviews`;
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

            if (assignmentIds) {
                localVarQueryParameter['assignment_ids'] = assignmentIds;
            }

            if (subjectIds) {
                localVarQueryParameter['subject_ids'] = subjectIds;
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
 * ReviewApi - functional programming interface
 * @export
 */
export const ReviewApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Creates a review for a specific assignment_id. Using the related subject_id is also a valid alternative to using assignment_id.  Some criteria must be met in order for a review to be created: available_at must be not null and in the past.  When a review is registered, the associated assignment and review_statistic are both updated. These are returned in the response body under resources_updated.
         * @summary Create a review
         * @param {CreateReviewRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createReview(body?: CreateReviewRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateReviewResponse>> {
            const localVarAxiosArgs = await ReviewApiAxiosParamCreator(configuration).createReview(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieves a specific review by its id.
         * @summary Get a Specific Review
         * @param {number} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getReview(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Review>> {
            const localVarAxiosArgs = await ReviewApiAxiosParamCreator(configuration).getReview(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns a collection of all reviews, ordered by ascending created_at, 500 at a time.
         * @summary Get All Reviews
         * @param {Array&lt;number&gt;} [ids] Only reviews where data.id matches one of the array values are returned.
         * @param {string} [updatedAfter] Only reviews updated after this time are returned.
         * @param {Array&lt;number&gt;} [assignmentIds] Only reviews where data.assignment_id matches one of the array values are returned.
         * @param {Array&lt;number&gt;} [subjectIds] Only reviews where data.subject_id matches one of the array values are returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getReviews(ids?: Array<number>, updatedAfter?: string, assignmentIds?: Array<number>, subjectIds?: Array<number>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Reviews>> {
            const localVarAxiosArgs = await ReviewApiAxiosParamCreator(configuration).getReviews(ids, updatedAfter, assignmentIds, subjectIds, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ReviewApi - factory interface
 * @export
 */
export const ReviewApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Creates a review for a specific assignment_id. Using the related subject_id is also a valid alternative to using assignment_id.  Some criteria must be met in order for a review to be created: available_at must be not null and in the past.  When a review is registered, the associated assignment and review_statistic are both updated. These are returned in the response body under resources_updated.
         * @summary Create a review
         * @param {CreateReviewRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createReview(body?: CreateReviewRequest, options?: any): AxiosPromise<CreateReviewResponse> {
            return ReviewApiFp(configuration).createReview(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a specific review by its id.
         * @summary Get a Specific Review
         * @param {number} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReview(id: number, options?: any): AxiosPromise<Review> {
            return ReviewApiFp(configuration).getReview(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a collection of all reviews, ordered by ascending created_at, 500 at a time.
         * @summary Get All Reviews
         * @param {Array&lt;number&gt;} [ids] Only reviews where data.id matches one of the array values are returned.
         * @param {string} [updatedAfter] Only reviews updated after this time are returned.
         * @param {Array&lt;number&gt;} [assignmentIds] Only reviews where data.assignment_id matches one of the array values are returned.
         * @param {Array&lt;number&gt;} [subjectIds] Only reviews where data.subject_id matches one of the array values are returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReviews(ids?: Array<number>, updatedAfter?: string, assignmentIds?: Array<number>, subjectIds?: Array<number>, options?: any): AxiosPromise<Reviews> {
            return ReviewApiFp(configuration).getReviews(ids, updatedAfter, assignmentIds, subjectIds, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ReviewApi - object-oriented interface
 * @export
 * @class ReviewApi
 * @extends {BaseAPI}
 */
export class ReviewApi extends BaseAPI {
    /**
     * Creates a review for a specific assignment_id. Using the related subject_id is also a valid alternative to using assignment_id.  Some criteria must be met in order for a review to be created: available_at must be not null and in the past.  When a review is registered, the associated assignment and review_statistic are both updated. These are returned in the response body under resources_updated.
     * @summary Create a review
     * @param {CreateReviewRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReviewApi
     */
    public createReview(body?: CreateReviewRequest, options?: any) {
        return ReviewApiFp(this.configuration).createReview(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieves a specific review by its id.
     * @summary Get a Specific Review
     * @param {number} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReviewApi
     */
    public getReview(id: number, options?: any) {
        return ReviewApiFp(this.configuration).getReview(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a collection of all reviews, ordered by ascending created_at, 500 at a time.
     * @summary Get All Reviews
     * @param {Array&lt;number&gt;} [ids] Only reviews where data.id matches one of the array values are returned.
     * @param {string} [updatedAfter] Only reviews updated after this time are returned.
     * @param {Array&lt;number&gt;} [assignmentIds] Only reviews where data.assignment_id matches one of the array values are returned.
     * @param {Array&lt;number&gt;} [subjectIds] Only reviews where data.subject_id matches one of the array values are returned.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReviewApi
     */
    public getReviews(ids?: Array<number>, updatedAfter?: string, assignmentIds?: Array<number>, subjectIds?: Array<number>, options?: any) {
        return ReviewApiFp(this.configuration).getReviews(ids, updatedAfter, assignmentIds, subjectIds, options).then((request) => request(this.axios, this.basePath));
    }
}
