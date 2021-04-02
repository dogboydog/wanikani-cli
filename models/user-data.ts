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
 * @interface UserData
 */
export interface UserData {
    /**
     * If the user is on vacation, this will be the timestamp of when that vacation started. If the user is not on vacation, this is null.
     * @type {Date}
     * @memberof UserData
     */
    currentVacationStartedAt: any | null;
    /**
     * The current level of the user. This ignores subscription status.
     * @type {number}
     * @memberof UserData
     */
    level: any;
    /**
     * 
     * @type {UserPreferences}
     * @memberof UserData
     */
    preferences: any;
    /**
     * The URL to the user's public facing profile page.
     * @type {string}
     * @memberof UserData
     */
    profileUrl: any;
    /**
     * The signup date for the user.
     * @type {Date}
     * @memberof UserData
     */
    startedAt: any;
    /**
     * 
     * @type {UserSubscription}
     * @memberof UserData
     */
    subscription: any;
    /**
     * The user's username.
     * @type {string}
     * @memberof UserData
     */
    username: any;
}
