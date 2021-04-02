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
 * @interface ReviewData
 */
export interface ReviewData {
    /**
     * Unique identifier of the associated assignment.
     * @type {number}
     * @memberof ReviewData
     */
    assignmentId: any;
    /**
     * Timestamp when the review was created.
     * @type {Date}
     * @memberof ReviewData
     */
    createdAt: any;
    /**
     * The SRS stage interval calculated from the number of correct and incorrect answers, with valid values ranging from 1 to 9
     * @type {number}
     * @memberof ReviewData
     */
    endingSrsStage: any;
    /**
     * The number of times the user has answered the meaning incorrectly.
     * @type {number}
     * @memberof ReviewData
     */
    incorrectMeaningAnswers: any;
    /**
     * The number of times the user has answered the reading incorrectly.
     * @type {number}
     * @memberof ReviewData
     */
    incorrectReadingAnswers: any;
    /**
     * Unique identifier of the associated spaced_repetition_system.
     * @type {number}
     * @memberof ReviewData
     */
    spacedRepetitionSystemId: any;
    /**
     * The starting SRS stage interval, with valid values ranging from 1 to 8
     * @type {number}
     * @memberof ReviewData
     */
    startingSrsStage: any;
    /**
     * Unique identifier of the associated subject.
     * @type {number}
     * @memberof ReviewData
     */
    subjectId: any;
}
