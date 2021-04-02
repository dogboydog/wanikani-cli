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
 * @interface SummaryReviews
 */
export interface SummaryReviews {
    /**
     * When the paired subject_ids are available for reviews. All timestamps are the top of an hour.
     * @type {Date}
     * @memberof SummaryReviews
     */
    availableAt: any;
    /**
     * Collection of unique identifiers for subjects.
     * @type {Array&lt;number&gt;}
     * @memberof SummaryReviews
     */
    subjectIds: any;
}
