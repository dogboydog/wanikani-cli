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
 * @interface CreateReview
 */
export interface CreateReview {
    /**
     * Unique identifier of the associated assignment.
     * @type {number}
     * @memberof CreateReview
     */
    assignmentId: any;
    /**
     * Timestamp when the review was created.
     * @type {Date}
     * @memberof CreateReview
     */
    createdAt?: any;
    /**
     * The SRS stage interval calculated from the number of correct and incorrect answers, with valid values ranging from 1 to 9
     * @type {number}
     * @memberof CreateReview
     */
    endingSrsStage?: any;
    /**
     * The number of times the user has answered the meaning incorrectly.
     * @type {number}
     * @memberof CreateReview
     */
    incorrectMeaningAnswers: any;
    /**
     * The number of times the user has answered the reading incorrectly.
     * @type {number}
     * @memberof CreateReview
     */
    incorrectReadingAnswers: any;
    /**
     * Unique identifier of the associated spaced_repetition_system.
     * @type {number}
     * @memberof CreateReview
     */
    spacedRepetitionSystemId?: any;
    /**
     * The starting SRS stage interval, with valid values ranging from 1 to 8
     * @type {number}
     * @memberof CreateReview
     */
    startingSrsStage?: any;
    /**
     * Unique identifier of the associated subject.
     * @type {number}
     * @memberof CreateReview
     */
    subjectId: any;
}
