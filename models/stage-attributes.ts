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
 * @interface StageAttributes
 */
export interface StageAttributes {
    /**
     * The length of time added to the time of review registration, adjusted to the beginning of the hour.
     * @type {number}
     * @memberof StageAttributes
     */
    interval: any | null;
    /**
     * Unit of time. Can be the following: milliseconds, seconds, minutes, hours, days, and weeks.
     * @type {string}
     * @memberof StageAttributes
     */
    intervalUnit: StageAttributesIntervalUnitEnum;
    /**
     * The position of the stage within the continuous order.
     * @type {number}
     * @memberof StageAttributes
     */
    position: any;
}

/**
    * @export
    * @enum {string}
    */
export enum StageAttributesIntervalUnitEnum {
    Milliseconds = 'milliseconds',
    Seconds = 'seconds',
    Minutes = 'minutes',
    Hours = 'hours',
    Days = 'days',
    Weeks = 'weeks'
}

