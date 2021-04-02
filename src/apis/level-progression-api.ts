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
import { LevelProgression } from '../../models';
import { LevelProgressions } from '../../models';
/**
 * LevelProgressionApi - axios parameter creator
 * @export
 */
export const LevelProgressionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves a specific level progression by its id.
         * @summary Get a Specific Level Progression
         * @param {number} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLevelProgression: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getLevelProgression.');
            }
            const localVarPath = `/level_progressions/{id}`
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
         * Returns a collection of all level progressions, ordered by ascending created_at, 500 at a time.
         * @summary Get All Level Progressions
         * @param {Array&lt;number&gt;} [ids] Only level progressions where data.id matches one of the array values are returned.
         * @param {string} [updatedAfter] Only level_progressions updated after this time are returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLevelProgressions: async (ids?: Array<number>, updatedAfter?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/level_progressions`;
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
 * LevelProgressionApi - functional programming interface
 * @export
 */
export const LevelProgressionApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieves a specific level progression by its id.
         * @summary Get a Specific Level Progression
         * @param {number} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLevelProgression(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LevelProgression>> {
            const localVarAxiosArgs = await LevelProgressionApiAxiosParamCreator(configuration).getLevelProgression(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns a collection of all level progressions, ordered by ascending created_at, 500 at a time.
         * @summary Get All Level Progressions
         * @param {Array&lt;number&gt;} [ids] Only level progressions where data.id matches one of the array values are returned.
         * @param {string} [updatedAfter] Only level_progressions updated after this time are returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLevelProgressions(ids?: Array<number>, updatedAfter?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LevelProgressions>> {
            const localVarAxiosArgs = await LevelProgressionApiAxiosParamCreator(configuration).getLevelProgressions(ids, updatedAfter, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * LevelProgressionApi - factory interface
 * @export
 */
export const LevelProgressionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieves a specific level progression by its id.
         * @summary Get a Specific Level Progression
         * @param {number} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLevelProgression(id: number, options?: any): AxiosPromise<LevelProgression> {
            return LevelProgressionApiFp(configuration).getLevelProgression(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a collection of all level progressions, ordered by ascending created_at, 500 at a time.
         * @summary Get All Level Progressions
         * @param {Array&lt;number&gt;} [ids] Only level progressions where data.id matches one of the array values are returned.
         * @param {string} [updatedAfter] Only level_progressions updated after this time are returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLevelProgressions(ids?: Array<number>, updatedAfter?: string, options?: any): AxiosPromise<LevelProgressions> {
            return LevelProgressionApiFp(configuration).getLevelProgressions(ids, updatedAfter, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LevelProgressionApi - object-oriented interface
 * @export
 * @class LevelProgressionApi
 * @extends {BaseAPI}
 */
export class LevelProgressionApi extends BaseAPI {
    /**
     * Retrieves a specific level progression by its id.
     * @summary Get a Specific Level Progression
     * @param {number} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LevelProgressionApi
     */
    public getLevelProgression(id: number, options?: any) {
        return LevelProgressionApiFp(this.configuration).getLevelProgression(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a collection of all level progressions, ordered by ascending created_at, 500 at a time.
     * @summary Get All Level Progressions
     * @param {Array&lt;number&gt;} [ids] Only level progressions where data.id matches one of the array values are returned.
     * @param {string} [updatedAfter] Only level_progressions updated after this time are returned.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LevelProgressionApi
     */
    public getLevelProgressions(ids?: Array<number>, updatedAfter?: string, options?: any) {
        return LevelProgressionApiFp(this.configuration).getLevelProgressions(ids, updatedAfter, options).then((request) => request(this.axios, this.basePath));
    }
}
