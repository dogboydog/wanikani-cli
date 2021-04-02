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
 * @interface AssignmentData
 */
export interface AssignmentData {
    /**
     * Timestamp when the related subject will be available in the user's review queue.
     * @type {Date}
     * @memberof AssignmentData
     */
    availableAt: any | null;
    /**
     * Timestamp when the user reaches SRS stage 9 the first time.
     * @type {Date}
     * @memberof AssignmentData
     */
    burnedAt: any | null;
    /**
     * Timestamp when the assignment was created.
     * @type {Date}
     * @memberof AssignmentData
     */
    createdAt: any;
    /**
     * Indicates if the associated subject has been hidden, preventing it from appearing in lessons or reviews.
     * @type {boolean}
     * @memberof AssignmentData
     */
    hidden: any;
    /**
     * Timestamp when the user reaches SRS stage 5 for the first time.
     * @type {Date}
     * @memberof AssignmentData
     */
    passedAt: any | null;
    /**
     * Timestamp when the subject is resurrected and placed back in the user's review queue.
     * @type {Date}
     * @memberof AssignmentData
     */
    resurrectedAt: any | null;
    /**
     * Current SRS stage interval. The interval range is determined by the related subject's spaced repetition system.
     * @type {number}
     * @memberof AssignmentData
     */
    srsStage: any;
    /**
     * Timestamp when the user completes the lesson for the related subject.
     * @type {Date}
     * @memberof AssignmentData
     */
    startedAt: any | null;
    /**
     * Unique identifier of the associated subject.
     * @type {number}
     * @memberof AssignmentData
     */
    subjectId: any;
    /**
     * 
     * @type {SubjectType}
     * @memberof AssignmentData
     */
    subjectType: any;
    /**
     * The timestamp when the related subject has its prerequisites satisfied and is made available in lessons.
     * @type {Date}
     * @memberof AssignmentData
     */
    unlockedAt: any | null;
}
