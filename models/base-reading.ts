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
 * 
 * @export
 * @interface BaseReading
 */
export interface BaseReading {
    /**
     * A singular subject reading.
     * @type {string}
     * @memberof BaseReading
     */
    reading: any;
    /**
     * Indicates priority in the WaniKani system.
     * @type {boolean}
     * @memberof BaseReading
     */
    primary: any;
    /**
     * Indicates if the reading is used to evaluate user input for correctness.
     * @type {boolean}
     * @memberof BaseReading
     */
    acceptedAnswer: any;
}
