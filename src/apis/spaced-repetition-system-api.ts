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
import { SpacedRepetitionSystem } from '../../models';
import { SpacedRepetitionSystems } from '../../models';
import { SubjectType } from '../../models';
/**
 * SpacedRepetitionSystemApi - axios parameter creator
 * @export
 */
export const SpacedRepetitionSystemApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves a specific spaced repetition system by its id.
         * @summary Get a Specific Spaced Repetition System
         * @param {number} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpacedRepetitionSystem: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getSpacedRepetitionSystem.');
            }
            const localVarPath = `/spaced_repetition_systems/{id}`
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
         * Returns a collection of all spaced repetition systems, ordered by ascending created_at, 500 at a time.
         * @summary Get All Spaced Repetition Systems
         * @param {boolean} [hidden] Return study materials with a matching value in the hidden attribute
         * @param {Array&lt;number&gt;} [ids] Only study material records where data.id matches one of the array values are returned.
         * @param {string} [updatedAfter] Only study material records updated after this time are returned.
         * @param {Array&lt;number&gt;} [subjectIds] Only study material records where data.subject_id matches one of the array values are returned.
         * @param {Array&lt;SubjectType&gt;} [subjectTypes] Only study material records where data.subject_type matches one of the array values are returned. Valid values are: radical, kanji, or vocabulary.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpacedRepetitionSystems: async (hidden?: boolean, ids?: Array<number>, updatedAfter?: string, subjectIds?: Array<number>, subjectTypes?: Array<SubjectType>, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/spaced_repetition_systems`;
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

            if (hidden !== undefined) {
                localVarQueryParameter['hidden'] = hidden;
            }

            if (ids) {
                localVarQueryParameter['ids'] = ids;
            }

            if (updatedAfter !== undefined) {
                localVarQueryParameter['updated_after'] = (updatedAfter as any instanceof Date) ?
                    (updatedAfter as any).toISOString().substr(0,10) :
                    updatedAfter;
            }

            if (subjectIds) {
                localVarQueryParameter['subject_ids'] = subjectIds;
            }

            if (subjectTypes) {
                localVarQueryParameter['subject_types'] = subjectTypes;
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
 * SpacedRepetitionSystemApi - functional programming interface
 * @export
 */
export const SpacedRepetitionSystemApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieves a specific spaced repetition system by its id.
         * @summary Get a Specific Spaced Repetition System
         * @param {number} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSpacedRepetitionSystem(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SpacedRepetitionSystem>> {
            const localVarAxiosArgs = await SpacedRepetitionSystemApiAxiosParamCreator(configuration).getSpacedRepetitionSystem(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns a collection of all spaced repetition systems, ordered by ascending created_at, 500 at a time.
         * @summary Get All Spaced Repetition Systems
         * @param {boolean} [hidden] Return study materials with a matching value in the hidden attribute
         * @param {Array&lt;number&gt;} [ids] Only study material records where data.id matches one of the array values are returned.
         * @param {string} [updatedAfter] Only study material records updated after this time are returned.
         * @param {Array&lt;number&gt;} [subjectIds] Only study material records where data.subject_id matches one of the array values are returned.
         * @param {Array&lt;SubjectType&gt;} [subjectTypes] Only study material records where data.subject_type matches one of the array values are returned. Valid values are: radical, kanji, or vocabulary.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSpacedRepetitionSystems(hidden?: boolean, ids?: Array<number>, updatedAfter?: string, subjectIds?: Array<number>, subjectTypes?: Array<SubjectType>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SpacedRepetitionSystems>> {
            const localVarAxiosArgs = await SpacedRepetitionSystemApiAxiosParamCreator(configuration).getSpacedRepetitionSystems(hidden, ids, updatedAfter, subjectIds, subjectTypes, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SpacedRepetitionSystemApi - factory interface
 * @export
 */
export const SpacedRepetitionSystemApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieves a specific spaced repetition system by its id.
         * @summary Get a Specific Spaced Repetition System
         * @param {number} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpacedRepetitionSystem(id: number, options?: any): AxiosPromise<SpacedRepetitionSystem> {
            return SpacedRepetitionSystemApiFp(configuration).getSpacedRepetitionSystem(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a collection of all spaced repetition systems, ordered by ascending created_at, 500 at a time.
         * @summary Get All Spaced Repetition Systems
         * @param {boolean} [hidden] Return study materials with a matching value in the hidden attribute
         * @param {Array&lt;number&gt;} [ids] Only study material records where data.id matches one of the array values are returned.
         * @param {string} [updatedAfter] Only study material records updated after this time are returned.
         * @param {Array&lt;number&gt;} [subjectIds] Only study material records where data.subject_id matches one of the array values are returned.
         * @param {Array&lt;SubjectType&gt;} [subjectTypes] Only study material records where data.subject_type matches one of the array values are returned. Valid values are: radical, kanji, or vocabulary.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpacedRepetitionSystems(hidden?: boolean, ids?: Array<number>, updatedAfter?: string, subjectIds?: Array<number>, subjectTypes?: Array<SubjectType>, options?: any): AxiosPromise<SpacedRepetitionSystems> {
            return SpacedRepetitionSystemApiFp(configuration).getSpacedRepetitionSystems(hidden, ids, updatedAfter, subjectIds, subjectTypes, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SpacedRepetitionSystemApi - object-oriented interface
 * @export
 * @class SpacedRepetitionSystemApi
 * @extends {BaseAPI}
 */
export class SpacedRepetitionSystemApi extends BaseAPI {
    /**
     * Retrieves a specific spaced repetition system by its id.
     * @summary Get a Specific Spaced Repetition System
     * @param {number} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpacedRepetitionSystemApi
     */
    public getSpacedRepetitionSystem(id: number, options?: any) {
        return SpacedRepetitionSystemApiFp(this.configuration).getSpacedRepetitionSystem(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a collection of all spaced repetition systems, ordered by ascending created_at, 500 at a time.
     * @summary Get All Spaced Repetition Systems
     * @param {boolean} [hidden] Return study materials with a matching value in the hidden attribute
     * @param {Array&lt;number&gt;} [ids] Only study material records where data.id matches one of the array values are returned.
     * @param {string} [updatedAfter] Only study material records updated after this time are returned.
     * @param {Array&lt;number&gt;} [subjectIds] Only study material records where data.subject_id matches one of the array values are returned.
     * @param {Array&lt;SubjectType&gt;} [subjectTypes] Only study material records where data.subject_type matches one of the array values are returned. Valid values are: radical, kanji, or vocabulary.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpacedRepetitionSystemApi
     */
    public getSpacedRepetitionSystems(hidden?: boolean, ids?: Array<number>, updatedAfter?: string, subjectIds?: Array<number>, subjectTypes?: Array<SubjectType>, options?: any) {
        return SpacedRepetitionSystemApiFp(this.configuration).getSpacedRepetitionSystems(hidden, ids, updatedAfter, subjectIds, subjectTypes, options).then((request) => request(this.axios, this.basePath));
    }
}
