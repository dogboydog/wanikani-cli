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
 * @interface Meaning
 */
export interface Meaning {
    /**
     * A singular subject meaning.
     * @type {string}
     * @memberof Meaning
     */
    meaning: any;
    /**
     * Indicates priority in the WaniKani system.
     * @type {boolean}
     * @memberof Meaning
     */
    primary: any;
    /**
     * Indicates if the meaning is used to evaluate user input for correctness.
     * @type {boolean}
     * @memberof Meaning
     */
    acceptedAnswer: any;
}
