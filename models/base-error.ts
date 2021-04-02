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
/**
 * Errors with a message will return with the follow response body structure
 * @export
 * @interface BaseError
 */
export interface BaseError {
    /**
     * 
     * @type {string}
     * @memberof BaseError
     */
    error: any;
    /**
     * 
     * @type {number}
     * @memberof BaseError
     */
    code: any;
}
