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
import { Subject } from '../../models';
import { SubjectType } from '../../models';
import { Subjects } from '../../models';
/**
 * SubjectApi - axios parameter creator
 * @export
 */
export const SubjectApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves a specific subject by its id. The structure of the response depends on the subject type. See the section on subject data structure for details.
         * @summary Get a Specific Subject
         * @param {number} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubject: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getSubject.');
            }
            const localVarPath = `/subjects/{id}`
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
         * Returns a collection of all subjects, ordered by ascending created_at, 500 at a time.
         * @summary Get All Subjects
         * @param {Array&lt;number&gt;} [ids] Only subjects where data.id matches one of the array values are returned.
         * @param {Array&lt;SubjectType&gt;} [types] Return subjects of the specified types.
         * @param {Array&lt;string&gt;} [slugs] Return subjects of the specified slug.
         * @param {Array&lt;number&gt;} [levels] Return subjects at the specified levels.
         * @param {boolean} [hidden] Return subjects which are or are not hidden from the user-facing application.
         * @param {string} [updatedAfter] Only subjects updated after this time are returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubjects: async (ids?: Array<number>, types?: Array<SubjectType>, slugs?: Array<string>, levels?: Array<number>, hidden?: boolean, updatedAfter?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/subjects`;
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

            if (types) {
                localVarQueryParameter['types'] = types;
            }

            if (slugs) {
                localVarQueryParameter['slugs'] = slugs;
            }

            if (levels) {
                localVarQueryParameter['levels'] = levels;
            }

            if (hidden !== undefined) {
                localVarQueryParameter['hidden'] = hidden;
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
    }
};

/**
 * SubjectApi - functional programming interface
 * @export
 */
export const SubjectApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieves a specific subject by its id. The structure of the response depends on the subject type. See the section on subject data structure for details.
         * @summary Get a Specific Subject
         * @param {number} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSubject(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Subject>> {
            const localVarAxiosArgs = await SubjectApiAxiosParamCreator(configuration).getSubject(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns a collection of all subjects, ordered by ascending created_at, 500 at a time.
         * @summary Get All Subjects
         * @param {Array&lt;number&gt;} [ids] Only subjects where data.id matches one of the array values are returned.
         * @param {Array&lt;SubjectType&gt;} [types] Return subjects of the specified types.
         * @param {Array&lt;string&gt;} [slugs] Return subjects of the specified slug.
         * @param {Array&lt;number&gt;} [levels] Return subjects at the specified levels.
         * @param {boolean} [hidden] Return subjects which are or are not hidden from the user-facing application.
         * @param {string} [updatedAfter] Only subjects updated after this time are returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSubjects(ids?: Array<number>, types?: Array<SubjectType>, slugs?: Array<string>, levels?: Array<number>, hidden?: boolean, updatedAfter?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Subjects>> {
            const localVarAxiosArgs = await SubjectApiAxiosParamCreator(configuration).getSubjects(ids, types, slugs, levels, hidden, updatedAfter, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SubjectApi - factory interface
 * @export
 */
export const SubjectApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieves a specific subject by its id. The structure of the response depends on the subject type. See the section on subject data structure for details.
         * @summary Get a Specific Subject
         * @param {number} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubject(id: number, options?: any): AxiosPromise<Subject> {
            return SubjectApiFp(configuration).getSubject(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a collection of all subjects, ordered by ascending created_at, 500 at a time.
         * @summary Get All Subjects
         * @param {Array&lt;number&gt;} [ids] Only subjects where data.id matches one of the array values are returned.
         * @param {Array&lt;SubjectType&gt;} [types] Return subjects of the specified types.
         * @param {Array&lt;string&gt;} [slugs] Return subjects of the specified slug.
         * @param {Array&lt;number&gt;} [levels] Return subjects at the specified levels.
         * @param {boolean} [hidden] Return subjects which are or are not hidden from the user-facing application.
         * @param {string} [updatedAfter] Only subjects updated after this time are returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubjects(ids?: Array<number>, types?: Array<SubjectType>, slugs?: Array<string>, levels?: Array<number>, hidden?: boolean, updatedAfter?: string, options?: any): AxiosPromise<Subjects> {
            return SubjectApiFp(configuration).getSubjects(ids, types, slugs, levels, hidden, updatedAfter, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SubjectApi - object-oriented interface
 * @export
 * @class SubjectApi
 * @extends {BaseAPI}
 */
export class SubjectApi extends BaseAPI {
    /**
     * Retrieves a specific subject by its id. The structure of the response depends on the subject type. See the section on subject data structure for details.
     * @summary Get a Specific Subject
     * @param {number} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubjectApi
     */
    public getSubject(id: number, options?: any) {
        return SubjectApiFp(this.configuration).getSubject(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a collection of all subjects, ordered by ascending created_at, 500 at a time.
     * @summary Get All Subjects
     * @param {Array&lt;number&gt;} [ids] Only subjects where data.id matches one of the array values are returned.
     * @param {Array&lt;SubjectType&gt;} [types] Return subjects of the specified types.
     * @param {Array&lt;string&gt;} [slugs] Return subjects of the specified slug.
     * @param {Array&lt;number&gt;} [levels] Return subjects at the specified levels.
     * @param {boolean} [hidden] Return subjects which are or are not hidden from the user-facing application.
     * @param {string} [updatedAfter] Only subjects updated after this time are returned.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubjectApi
     */
    public getSubjects(ids?: Array<number>, types?: Array<SubjectType>, slugs?: Array<string>, levels?: Array<number>, hidden?: boolean, updatedAfter?: string, options?: any) {
        return SubjectApiFp(this.configuration).getSubjects(ids, types, slugs, levels, hidden, updatedAfter, options).then((request) => request(this.axios, this.basePath));
    }
}
