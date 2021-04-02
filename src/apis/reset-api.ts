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
import { Reset } from '../../models';
import { Resets } from '../../models';
/**
 * ResetApi - axios parameter creator
 * @export
 */
export const ResetApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves a specific reset by its id.
         * @summary Get a Specific Reset
         * @param {number} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReset: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getReset.');
            }
            const localVarPath = `/resets/{id}`
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
         * Returns a collection of all resets, ordered by ascending created_at, 500 at a time.
         * @summary Get All Resets
         * @param {Array&lt;number&gt;} [ids] Only resets where data.id matches one of the array values are returned.
         * @param {string} [updatedAfter] Only resets updated after this time are returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getResets: async (ids?: Array<number>, updatedAfter?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/resets`;
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
 * ResetApi - functional programming interface
 * @export
 */
export const ResetApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieves a specific reset by its id.
         * @summary Get a Specific Reset
         * @param {number} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getReset(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Reset>> {
            const localVarAxiosArgs = await ResetApiAxiosParamCreator(configuration).getReset(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns a collection of all resets, ordered by ascending created_at, 500 at a time.
         * @summary Get All Resets
         * @param {Array&lt;number&gt;} [ids] Only resets where data.id matches one of the array values are returned.
         * @param {string} [updatedAfter] Only resets updated after this time are returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getResets(ids?: Array<number>, updatedAfter?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Resets>> {
            const localVarAxiosArgs = await ResetApiAxiosParamCreator(configuration).getResets(ids, updatedAfter, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ResetApi - factory interface
 * @export
 */
export const ResetApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieves a specific reset by its id.
         * @summary Get a Specific Reset
         * @param {number} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReset(id: number, options?: any): AxiosPromise<Reset> {
            return ResetApiFp(configuration).getReset(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a collection of all resets, ordered by ascending created_at, 500 at a time.
         * @summary Get All Resets
         * @param {Array&lt;number&gt;} [ids] Only resets where data.id matches one of the array values are returned.
         * @param {string} [updatedAfter] Only resets updated after this time are returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getResets(ids?: Array<number>, updatedAfter?: string, options?: any): AxiosPromise<Resets> {
            return ResetApiFp(configuration).getResets(ids, updatedAfter, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ResetApi - object-oriented interface
 * @export
 * @class ResetApi
 * @extends {BaseAPI}
 */
export class ResetApi extends BaseAPI {
    /**
     * Retrieves a specific reset by its id.
     * @summary Get a Specific Reset
     * @param {number} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ResetApi
     */
    public getReset(id: number, options?: any) {
        return ResetApiFp(this.configuration).getReset(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a collection of all resets, ordered by ascending created_at, 500 at a time.
     * @summary Get All Resets
     * @param {Array&lt;number&gt;} [ids] Only resets where data.id matches one of the array values are returned.
     * @param {string} [updatedAfter] Only resets updated after this time are returned.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ResetApi
     */
    public getResets(ids?: Array<number>, updatedAfter?: string, options?: any) {
        return ResetApiFp(this.configuration).getResets(ids, updatedAfter, options).then((request) => request(this.axios, this.basePath));
    }
}
