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
 * @interface SummaryData
 */
export interface SummaryData {
    /**
     * Details about subjects available for lessons. See table below for object structure.
     * @type {Array&lt;SummaryLessons&gt;}
     * @memberof SummaryData
     */
    lessons: any;
    /**
     * Earliest date when the reviews are available. Is null when the user has no reviews scheduled.
     * @type {Date}
     * @memberof SummaryData
     */
    nextReviewsAt: any | null;
    /**
     * Details about subjects available for reviews now and in the next 24 hours by the hour (total of 25 objects). See table below for object structure.
     * @type {Array&lt;SummaryReviews&gt;}
     * @memberof SummaryData
     */
    reviews: any;
}
