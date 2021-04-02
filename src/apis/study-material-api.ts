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
import { StudyMaterial } from '../../models';
import { StudyMaterials } from '../../models';
/**
 * StudyMaterialApi - axios parameter creator
 * @export
 */
export const StudyMaterialApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves a specific study material by its id.
         * @summary Get a Specific Study Material
         * @param {number} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStudyMaterial: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getStudyMaterial.');
            }
            const localVarPath = `/study_materials/{id}`
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
         * Returns a collection of all study material, ordered by ascending created_at, 500 at a time.
         * @summary Get All Study Materials
         * @param {Array&lt;number&gt;} [ids] Only spaced_repetition_systems where data.id matches one of the array values are returned.
         * @param {string} [updatedAfter] Only spaced_repetition_systems updated after this time are returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStudyMaterials: async (ids?: Array<number>, updatedAfter?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/study_materials`;
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
 * StudyMaterialApi - functional programming interface
 * @export
 */
export const StudyMaterialApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieves a specific study material by its id.
         * @summary Get a Specific Study Material
         * @param {number} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStudyMaterial(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StudyMaterial>> {
            const localVarAxiosArgs = await StudyMaterialApiAxiosParamCreator(configuration).getStudyMaterial(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns a collection of all study material, ordered by ascending created_at, 500 at a time.
         * @summary Get All Study Materials
         * @param {Array&lt;number&gt;} [ids] Only spaced_repetition_systems where data.id matches one of the array values are returned.
         * @param {string} [updatedAfter] Only spaced_repetition_systems updated after this time are returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStudyMaterials(ids?: Array<number>, updatedAfter?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StudyMaterials>> {
            const localVarAxiosArgs = await StudyMaterialApiAxiosParamCreator(configuration).getStudyMaterials(ids, updatedAfter, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * StudyMaterialApi - factory interface
 * @export
 */
export const StudyMaterialApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieves a specific study material by its id.
         * @summary Get a Specific Study Material
         * @param {number} id ID of the resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStudyMaterial(id: number, options?: any): AxiosPromise<StudyMaterial> {
            return StudyMaterialApiFp(configuration).getStudyMaterial(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a collection of all study material, ordered by ascending created_at, 500 at a time.
         * @summary Get All Study Materials
         * @param {Array&lt;number&gt;} [ids] Only spaced_repetition_systems where data.id matches one of the array values are returned.
         * @param {string} [updatedAfter] Only spaced_repetition_systems updated after this time are returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStudyMaterials(ids?: Array<number>, updatedAfter?: string, options?: any): AxiosPromise<StudyMaterials> {
            return StudyMaterialApiFp(configuration).getStudyMaterials(ids, updatedAfter, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * StudyMaterialApi - object-oriented interface
 * @export
 * @class StudyMaterialApi
 * @extends {BaseAPI}
 */
export class StudyMaterialApi extends BaseAPI {
    /**
     * Retrieves a specific study material by its id.
     * @summary Get a Specific Study Material
     * @param {number} id ID of the resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudyMaterialApi
     */
    public getStudyMaterial(id: number, options?: any) {
        return StudyMaterialApiFp(this.configuration).getStudyMaterial(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a collection of all study material, ordered by ascending created_at, 500 at a time.
     * @summary Get All Study Materials
     * @param {Array&lt;number&gt;} [ids] Only spaced_repetition_systems where data.id matches one of the array values are returned.
     * @param {string} [updatedAfter] Only spaced_repetition_systems updated after this time are returned.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudyMaterialApi
     */
    public getStudyMaterials(ids?: Array<number>, updatedAfter?: string, options?: any) {
        return StudyMaterialApiFp(this.configuration).getStudyMaterials(ids, updatedAfter, options).then((request) => request(this.axios, this.basePath));
    }
}
