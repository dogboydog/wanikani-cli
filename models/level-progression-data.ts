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
 * @interface LevelProgressionData
 */
export interface LevelProgressionData {
    /**
     * Timestamp when the user abandons the level. This is primary used when the user initiates a reset.
     * @type {Date}
     * @memberof LevelProgressionData
     */
    abandonedAt: any | null;
    /**
     * Timestamp when the user burns 100% of the assignments belonging to the associated subject's level.
     * @type {Date}
     * @memberof LevelProgressionData
     */
    completedAt: any | null;
    /**
     * Timestamp when the level progression is created
     * @type {Date}
     * @memberof LevelProgressionData
     */
    createdAt: any;
    /**
     * The level of the progression, with possible values from 1 to 60.
     * @type {number}
     * @memberof LevelProgressionData
     */
    level: any;
    /**
     * Timestamp when the user passes at least 90% of the assignments with a type of kanji belonging to the associated subject's level.
     * @type {Date}
     * @memberof LevelProgressionData
     */
    passedAt: any | null;
    /**
     * Timestamp when the user starts their first lesson of a subject belonging to the level.
     * @type {Date}
     * @memberof LevelProgressionData
     */
    startedAt: any | null;
    /**
     * Timestamp when the user can access lessons and reviews for the level.
     * @type {Date}
     * @memberof LevelProgressionData
     */
    unlockedAt: any | null;
}
