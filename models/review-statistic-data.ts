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
 * @interface ReviewStatisticData
 */
export interface ReviewStatisticData {
    /**
     * Timestamp when the review statistic was created.
     * @type {Date}
     * @memberof ReviewStatisticData
     */
    createdAt: any;
    /**
     * Indicates if the associated subject has been hidden, preventing it from appearing in lessons or reviews.
     * @type {boolean}
     * @memberof ReviewStatisticData
     */
    hidden: any;
    /**
     * Total number of correct answers submitted for the meaning of the associated subject.
     * @type {number}
     * @memberof ReviewStatisticData
     */
    meaningCorrect: any;
    /**
     * The current, uninterrupted series of correct answers given for the meaning of the associated subject.
     * @type {number}
     * @memberof ReviewStatisticData
     */
    meaningCurrentStreak: any;
    /**
     * Total number of incorrect answers submitted for the meaning of the associated subject.
     * @type {number}
     * @memberof ReviewStatisticData
     */
    meaningIncorrect: any;
    /**
     * The longest, uninterrupted series of correct answers ever given for the meaning of the associated subject.
     * @type {number}
     * @memberof ReviewStatisticData
     */
    meaningMaxStreak: any;
    /**
     * The overall correct answer rate by the user for the subject, including both meaning and reading.
     * @type {number}
     * @memberof ReviewStatisticData
     */
    percentageCorrect: any;
    /**
     * Total number of correct answers submitted for the reading of the associated subject.
     * @type {number}
     * @memberof ReviewStatisticData
     */
    readingCorrect: any;
    /**
     * The current, uninterrupted series of correct answers given for the reading of the associated subject.
     * @type {number}
     * @memberof ReviewStatisticData
     */
    readingCurrentStreak: any;
    /**
     * Total number of incorrect answers submitted for the reading of the associated subject.
     * @type {number}
     * @memberof ReviewStatisticData
     */
    readingIncorrect: any;
    /**
     * The longest, uninterrupted series of correct answers ever given for the reading of the associated subject.
     * @type {number}
     * @memberof ReviewStatisticData
     */
    readingMaxStreak: any;
    /**
     * Unique identifier of the associated subject.
     * @type {number}
     * @memberof ReviewStatisticData
     */
    subjectId: any;
    /**
     * 
     * @type {SubjectType}
     * @memberof ReviewStatisticData
     */
    subjectType: any;
}
