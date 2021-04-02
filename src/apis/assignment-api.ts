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
import { Assignment } from '../../models';
import { Assignments } from '../../models';
import { BaseError } from '../../models';
import { StartAssignmentRequest } from '../../models';
import { SubjectType } from '../../models';
/**
 * AssignmentApi - axios parameter creator
 * @export
 */
export const AssignmentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves a specific assignment by its id.
         * @summary Get a Specific Assignment
         * @param {number} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAssignment: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getAssignment.');
            }
            const localVarPath = `/assignments/{id}`
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
         * Returns a collection of all assignments, ordered by ascending created_at, 500 at a time.
         * @summary Get All Assignments
         * @param {string} [availableAfter] Only assignments available at or after this time are returned.
         * @param {string} [availableBefore] Only assignments available at or before this time are returned.
         * @param {boolean} [burned] When set to true, returns assignments that have a value in data.burned_at. Returns assignments with a null data.burned_at if false.
         * @param {boolean} [hidden] Return assignments with a matching value in the hidden attribute
         * @param {Array&lt;number&gt;} [ids] Only assignments where data.id matches one of the array values are returned.
         * @param {boolean} [immediatelyAvailableForLessons] Returns assignments which are immediately available for lessons
         * @param {boolean} [immediatelyAvailableForReview] Returns assignments which are immediately available for review
         * @param {boolean} [inReview] Returns assignments which are in the review state
         * @param {Array&lt;number&gt;} [levels] Only assignments where the associated subject level matches one of the array values are returned. Valid values range from 1 to 60.
         * @param {Array&lt;number&gt;} [srsStages] Only assignments where data.srs_stage matches one of the array values are returned. Valid values range from 0 to 9
         * @param {boolean} [started] When set to true, returns assignments that have a value in data.started_at. Returns assignments with a null data.started_at if false.
         * @param {Array&lt;number&gt;} [subjectIds] Only assignments where data.subject_id matches one of the array values are returned.
         * @param {Array&lt;SubjectType&gt;} [subjectTypes] Only assignments where data.subject_type matches one of the array values are returned. Valid values are: radical, kanji, or vocabulary.
         * @param {boolean} [unlocked] When set to true, returns assignments that have a value in data.unlocked_at. Returns assignments with a null data.unlocked_at if false.
         * @param {string} [updatedAfter] Only assignments updated after this time are returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAssignments: async (availableAfter?: string, availableBefore?: string, burned?: boolean, hidden?: boolean, ids?: Array<number>, immediatelyAvailableForLessons?: boolean, immediatelyAvailableForReview?: boolean, inReview?: boolean, levels?: Array<number>, srsStages?: Array<number>, started?: boolean, subjectIds?: Array<number>, subjectTypes?: Array<SubjectType>, unlocked?: boolean, updatedAfter?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/assignments`;
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

            if (availableAfter !== undefined) {
                localVarQueryParameter['available_after'] = (availableAfter as any instanceof Date) ?
                    (availableAfter as any).toISOString().substr(0,10) :
                    availableAfter;
            }

            if (availableBefore !== undefined) {
                localVarQueryParameter['available_before'] = (availableBefore as any instanceof Date) ?
                    (availableBefore as any).toISOString().substr(0,10) :
                    availableBefore;
            }

            if (burned !== undefined) {
                localVarQueryParameter['burned'] = burned;
            }

            if (hidden !== undefined) {
                localVarQueryParameter['hidden'] = hidden;
            }

            if (ids) {
                localVarQueryParameter['ids'] = ids;
            }

            if (immediatelyAvailableForLessons !== undefined) {
                localVarQueryParameter['immediately_available_for_lessons'] = immediatelyAvailableForLessons;
            }

            if (immediatelyAvailableForReview !== undefined) {
                localVarQueryParameter['immediately_available_for_review'] = immediatelyAvailableForReview;
            }

            if (inReview !== undefined) {
                localVarQueryParameter['in_review'] = inReview;
            }

            if (levels) {
                localVarQueryParameter['levels'] = levels;
            }

            if (srsStages) {
                localVarQueryParameter['srs_stages'] = srsStages;
            }

            if (started !== undefined) {
                localVarQueryParameter['started'] = started;
            }

            if (subjectIds) {
                localVarQueryParameter['subject_ids'] = subjectIds;
            }

            if (subjectTypes) {
                localVarQueryParameter['subject_types'] = subjectTypes;
            }

            if (unlocked !== undefined) {
                localVarQueryParameter['unlocked'] = unlocked;
            }

            if (updatedAfter !== undefined) {
                localVarQueryParameter['updated_after'] = (updatedAfter as any instanceof Date) ?
                    (updatedAfter as any).toISOString().substr(0,10) :
                    updatedAfter;
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
        /**
         * Mark the assignment as started, moving the assignment from the lessons queue to the review queue. Returns the updated assignment.
         * @summary Start an Assignment
         * @param {number} id ID of the resource
         * @param {StartAssignmentRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startAssignment: async (id: number, body?: StartAssignmentRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling startAssignment.');
            }
            const localVarPath = `/assignments/{id}/start`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
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
    }
};

/**
 * AssignmentApi - functional programming interface
 * @export
 */
export const AssignmentApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieves a specific assignment by its id.
         * @summary Get a Specific Assignment
         * @param {number} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAssignment(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Assignment>> {
            const localVarAxiosArgs = await AssignmentApiAxiosParamCreator(configuration).getAssignment(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns a collection of all assignments, ordered by ascending created_at, 500 at a time.
         * @summary Get All Assignments
         * @param {string} [availableAfter] Only assignments available at or after this time are returned.
         * @param {string} [availableBefore] Only assignments available at or before this time are returned.
         * @param {boolean} [burned] When set to true, returns assignments that have a value in data.burned_at. Returns assignments with a null data.burned_at if false.
         * @param {boolean} [hidden] Return assignments with a matching value in the hidden attribute
         * @param {Array&lt;number&gt;} [ids] Only assignments where data.id matches one of the array values are returned.
         * @param {boolean} [immediatelyAvailableForLessons] Returns assignments which are immediately available for lessons
         * @param {boolean} [immediatelyAvailableForReview] Returns assignments which are immediately available for review
         * @param {boolean} [inReview] Returns assignments which are in the review state
         * @param {Array&lt;number&gt;} [levels] Only assignments where the associated subject level matches one of the array values are returned. Valid values range from 1 to 60.
         * @param {Array&lt;number&gt;} [srsStages] Only assignments where data.srs_stage matches one of the array values are returned. Valid values range from 0 to 9
         * @param {boolean} [started] When set to true, returns assignments that have a value in data.started_at. Returns assignments with a null data.started_at if false.
         * @param {Array&lt;number&gt;} [subjectIds] Only assignments where data.subject_id matches one of the array values are returned.
         * @param {Array&lt;SubjectType&gt;} [subjectTypes] Only assignments where data.subject_type matches one of the array values are returned. Valid values are: radical, kanji, or vocabulary.
         * @param {boolean} [unlocked] When set to true, returns assignments that have a value in data.unlocked_at. Returns assignments with a null data.unlocked_at if false.
         * @param {string} [updatedAfter] Only assignments updated after this time are returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAssignments(availableAfter?: string, availableBefore?: string, burned?: boolean, hidden?: boolean, ids?: Array<number>, immediatelyAvailableForLessons?: boolean, immediatelyAvailableForReview?: boolean, inReview?: boolean, levels?: Array<number>, srsStages?: Array<number>, started?: boolean, subjectIds?: Array<number>, subjectTypes?: Array<SubjectType>, unlocked?: boolean, updatedAfter?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Assignments>> {
            const localVarAxiosArgs = await AssignmentApiAxiosParamCreator(configuration).getAssignments(availableAfter, availableBefore, burned, hidden, ids, immediatelyAvailableForLessons, immediatelyAvailableForReview, inReview, levels, srsStages, started, subjectIds, subjectTypes, unlocked, updatedAfter, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Mark the assignment as started, moving the assignment from the lessons queue to the review queue. Returns the updated assignment.
         * @summary Start an Assignment
         * @param {number} id ID of the resource
         * @param {StartAssignmentRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async startAssignment(id: number, body?: StartAssignmentRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Assignment>> {
            const localVarAxiosArgs = await AssignmentApiAxiosParamCreator(configuration).startAssignment(id, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AssignmentApi - factory interface
 * @export
 */
export const AssignmentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieves a specific assignment by its id.
         * @summary Get a Specific Assignment
         * @param {number} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAssignment(id: number, options?: any): AxiosPromise<Assignment> {
            return AssignmentApiFp(configuration).getAssignment(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a collection of all assignments, ordered by ascending created_at, 500 at a time.
         * @summary Get All Assignments
         * @param {string} [availableAfter] Only assignments available at or after this time are returned.
         * @param {string} [availableBefore] Only assignments available at or before this time are returned.
         * @param {boolean} [burned] When set to true, returns assignments that have a value in data.burned_at. Returns assignments with a null data.burned_at if false.
         * @param {boolean} [hidden] Return assignments with a matching value in the hidden attribute
         * @param {Array&lt;number&gt;} [ids] Only assignments where data.id matches one of the array values are returned.
         * @param {boolean} [immediatelyAvailableForLessons] Returns assignments which are immediately available for lessons
         * @param {boolean} [immediatelyAvailableForReview] Returns assignments which are immediately available for review
         * @param {boolean} [inReview] Returns assignments which are in the review state
         * @param {Array&lt;number&gt;} [levels] Only assignments where the associated subject level matches one of the array values are returned. Valid values range from 1 to 60.
         * @param {Array&lt;number&gt;} [srsStages] Only assignments where data.srs_stage matches one of the array values are returned. Valid values range from 0 to 9
         * @param {boolean} [started] When set to true, returns assignments that have a value in data.started_at. Returns assignments with a null data.started_at if false.
         * @param {Array&lt;number&gt;} [subjectIds] Only assignments where data.subject_id matches one of the array values are returned.
         * @param {Array&lt;SubjectType&gt;} [subjectTypes] Only assignments where data.subject_type matches one of the array values are returned. Valid values are: radical, kanji, or vocabulary.
         * @param {boolean} [unlocked] When set to true, returns assignments that have a value in data.unlocked_at. Returns assignments with a null data.unlocked_at if false.
         * @param {string} [updatedAfter] Only assignments updated after this time are returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAssignments(availableAfter?: string, availableBefore?: string, burned?: boolean, hidden?: boolean, ids?: Array<number>, immediatelyAvailableForLessons?: boolean, immediatelyAvailableForReview?: boolean, inReview?: boolean, levels?: Array<number>, srsStages?: Array<number>, started?: boolean, subjectIds?: Array<number>, subjectTypes?: Array<SubjectType>, unlocked?: boolean, updatedAfter?: string, options?: any): AxiosPromise<Assignments> {
            return AssignmentApiFp(configuration).getAssignments(availableAfter, availableBefore, burned, hidden, ids, immediatelyAvailableForLessons, immediatelyAvailableForReview, inReview, levels, srsStages, started, subjectIds, subjectTypes, unlocked, updatedAfter, options).then((request) => request(axios, basePath));
        },
        /**
         * Mark the assignment as started, moving the assignment from the lessons queue to the review queue. Returns the updated assignment.
         * @summary Start an Assignment
         * @param {number} id ID of the resource
         * @param {StartAssignmentRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startAssignment(id: number, body?: StartAssignmentRequest, options?: any): AxiosPromise<Assignment> {
            return AssignmentApiFp(configuration).startAssignment(id, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AssignmentApi - object-oriented interface
 * @export
 * @class AssignmentApi
 * @extends {BaseAPI}
 */
export class AssignmentApi extends BaseAPI {
    /**
     * Retrieves a specific assignment by its id.
     * @summary Get a Specific Assignment
     * @param {number} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssignmentApi
     */
    public getAssignment(id: number, options?: any) {
        return AssignmentApiFp(this.configuration).getAssignment(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a collection of all assignments, ordered by ascending created_at, 500 at a time.
     * @summary Get All Assignments
     * @param {string} [availableAfter] Only assignments available at or after this time are returned.
     * @param {string} [availableBefore] Only assignments available at or before this time are returned.
     * @param {boolean} [burned] When set to true, returns assignments that have a value in data.burned_at. Returns assignments with a null data.burned_at if false.
     * @param {boolean} [hidden] Return assignments with a matching value in the hidden attribute
     * @param {Array&lt;number&gt;} [ids] Only assignments where data.id matches one of the array values are returned.
     * @param {boolean} [immediatelyAvailableForLessons] Returns assignments which are immediately available for lessons
     * @param {boolean} [immediatelyAvailableForReview] Returns assignments which are immediately available for review
     * @param {boolean} [inReview] Returns assignments which are in the review state
     * @param {Array&lt;number&gt;} [levels] Only assignments where the associated subject level matches one of the array values are returned. Valid values range from 1 to 60.
     * @param {Array&lt;number&gt;} [srsStages] Only assignments where data.srs_stage matches one of the array values are returned. Valid values range from 0 to 9
     * @param {boolean} [started] When set to true, returns assignments that have a value in data.started_at. Returns assignments with a null data.started_at if false.
     * @param {Array&lt;number&gt;} [subjectIds] Only assignments where data.subject_id matches one of the array values are returned.
     * @param {Array&lt;SubjectType&gt;} [subjectTypes] Only assignments where data.subject_type matches one of the array values are returned. Valid values are: radical, kanji, or vocabulary.
     * @param {boolean} [unlocked] When set to true, returns assignments that have a value in data.unlocked_at. Returns assignments with a null data.unlocked_at if false.
     * @param {string} [updatedAfter] Only assignments updated after this time are returned.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssignmentApi
     */
    public getAssignments(availableAfter?: string, availableBefore?: string, burned?: boolean, hidden?: boolean, ids?: Array<number>, immediatelyAvailableForLessons?: boolean, immediatelyAvailableForReview?: boolean, inReview?: boolean, levels?: Array<number>, srsStages?: Array<number>, started?: boolean, subjectIds?: Array<number>, subjectTypes?: Array<SubjectType>, unlocked?: boolean, updatedAfter?: string, options?: any) {
        return AssignmentApiFp(this.configuration).getAssignments(availableAfter, availableBefore, burned, hidden, ids, immediatelyAvailableForLessons, immediatelyAvailableForReview, inReview, levels, srsStages, started, subjectIds, subjectTypes, unlocked, updatedAfter, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Mark the assignment as started, moving the assignment from the lessons queue to the review queue. Returns the updated assignment.
     * @summary Start an Assignment
     * @param {number} id ID of the resource
     * @param {StartAssignmentRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssignmentApi
     */
    public startAssignment(id: number, body?: StartAssignmentRequest, options?: any) {
        return AssignmentApiFp(this.configuration).startAssignment(id, body, options).then((request) => request(this.axios, this.basePath));
    }
}
