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
import { VoiceActor } from '../../models';
import { VoiceActors } from '../../models';
/**
 * VoiceActorApi - axios parameter creator
 * @export
 */
export const VoiceActorApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves a specific voice actor by its id.
         * @summary Get a Specific Voice Actor
         * @param {number} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVoiceActor: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getVoiceActor.');
            }
            const localVarPath = `/voice_actors/{id}`
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
         * Returns a collection of all voice actors, ordered by ascending created_at, 500 at a time.
         * @summary Get All Voice Actors
         * @param {Array&lt;number&gt;} [ids] Only voice_actors where data.id matches one of the array values are returned.
         * @param {string} [updatedAfter] Only voice_actors updated after this time are returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVoiceActors: async (ids?: Array<number>, updatedAfter?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/voice_actors`;
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
 * VoiceActorApi - functional programming interface
 * @export
 */
export const VoiceActorApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieves a specific voice actor by its id.
         * @summary Get a Specific Voice Actor
         * @param {number} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVoiceActor(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VoiceActor>> {
            const localVarAxiosArgs = await VoiceActorApiAxiosParamCreator(configuration).getVoiceActor(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns a collection of all voice actors, ordered by ascending created_at, 500 at a time.
         * @summary Get All Voice Actors
         * @param {Array&lt;number&gt;} [ids] Only voice_actors where data.id matches one of the array values are returned.
         * @param {string} [updatedAfter] Only voice_actors updated after this time are returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVoiceActors(ids?: Array<number>, updatedAfter?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VoiceActors>> {
            const localVarAxiosArgs = await VoiceActorApiAxiosParamCreator(configuration).getVoiceActors(ids, updatedAfter, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * VoiceActorApi - factory interface
 * @export
 */
export const VoiceActorApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieves a specific voice actor by its id.
         * @summary Get a Specific Voice Actor
         * @param {number} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVoiceActor(id: number, options?: any): AxiosPromise<VoiceActor> {
            return VoiceActorApiFp(configuration).getVoiceActor(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a collection of all voice actors, ordered by ascending created_at, 500 at a time.
         * @summary Get All Voice Actors
         * @param {Array&lt;number&gt;} [ids] Only voice_actors where data.id matches one of the array values are returned.
         * @param {string} [updatedAfter] Only voice_actors updated after this time are returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVoiceActors(ids?: Array<number>, updatedAfter?: string, options?: any): AxiosPromise<VoiceActors> {
            return VoiceActorApiFp(configuration).getVoiceActors(ids, updatedAfter, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * VoiceActorApi - object-oriented interface
 * @export
 * @class VoiceActorApi
 * @extends {BaseAPI}
 */
export class VoiceActorApi extends BaseAPI {
    /**
     * Retrieves a specific voice actor by its id.
     * @summary Get a Specific Voice Actor
     * @param {number} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VoiceActorApi
     */
    public getVoiceActor(id: number, options?: any) {
        return VoiceActorApiFp(this.configuration).getVoiceActor(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a collection of all voice actors, ordered by ascending created_at, 500 at a time.
     * @summary Get All Voice Actors
     * @param {Array&lt;number&gt;} [ids] Only voice_actors where data.id matches one of the array values are returned.
     * @param {string} [updatedAfter] Only voice_actors updated after this time are returned.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VoiceActorApi
     */
    public getVoiceActors(ids?: Array<number>, updatedAfter?: string, options?: any) {
        return VoiceActorApiFp(this.configuration).getVoiceActors(ids, updatedAfter, options).then((request) => request(this.axios, this.basePath));
    }
}
