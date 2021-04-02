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
import { Summary } from '../../models';
/**
 * SummaryApi - axios parameter creator
 * @export
 */
export const SummaryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves a summary report.
         * @summary Get a Summary
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSummary: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/summary`;
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
    }
};

/**
 * SummaryApi - functional programming interface
 * @export
 */
export const SummaryApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieves a summary report.
         * @summary Get a Summary
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSummary(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Summary>> {
            const localVarAxiosArgs = await SummaryApiAxiosParamCreator(configuration).getSummary(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SummaryApi - factory interface
 * @export
 */
export const SummaryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieves a summary report.
         * @summary Get a Summary
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSummary(options?: any): AxiosPromise<Summary> {
            return SummaryApiFp(configuration).getSummary(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SummaryApi - object-oriented interface
 * @export
 * @class SummaryApi
 * @extends {BaseAPI}
 */
export class SummaryApi extends BaseAPI {
    /**
     * Retrieves a summary report.
     * @summary Get a Summary
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SummaryApi
     */
    public getSummary(options?: any) {
        return SummaryApiFp(this.configuration).getSummary(options).then((request) => request(this.axios, this.basePath));
    }
}
