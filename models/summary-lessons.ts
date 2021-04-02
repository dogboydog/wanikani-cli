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
 * @interface SummaryLessons
 */
export interface SummaryLessons {
    /**
     * When the paired subject_ids are available for lessons. Always beginning of the current hour when the API endpoint is accessed.
     * @type {Date}
     * @memberof SummaryLessons
     */
    availableAt: any;
    /**
     * Collection of unique identifiers for subjects.
     * @type {Array&lt;number&gt;}
     * @memberof SummaryLessons
     */
    subjectIds: any;
}
