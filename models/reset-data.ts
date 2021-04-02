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
 * @interface ResetData
 */
export interface ResetData {
    /**
     * Timestamp when the user confirmed the reset.
     * @type {Date}
     * @memberof ResetData
     */
    confirmedAt: any | null;
    /**
     * Timestamp when the reset was created.
     * @type {Date}
     * @memberof ResetData
     */
    createdAt: any;
    /**
     * The user's level before the reset, from 1 to 60
     * @type {number}
     * @memberof ResetData
     */
    originalLevel: any;
    /**
     * The user's level after the reset, from 1 to 60. It must be less than or equal to original_level.
     * @type {number}
     * @memberof ResetData
     */
    targetLevel: any;
}
