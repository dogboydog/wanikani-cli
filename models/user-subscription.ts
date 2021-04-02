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
 * Details about the user's subscription state. See table below for the object structure.
 * @export
 * @interface UserSubscription
 */
export interface UserSubscription {
    /**
     * Whether or not the user currently has a paid subscription.
     * @type {boolean}
     * @memberof UserSubscription
     */
    active: any;
    /**
     * The maximum level of content accessible to the user for lessons, reviews, and content review. For unsubscribed/free users, the maximum level is 3. For subscribed users, this is 60. Any application that uses data from the WaniKani API must respect these access limits.
     * @type {number}
     * @memberof UserSubscription
     */
    maxLevelGranted: any;
    /**
     * The date when the user's subscription period ends. If the user has subscription type lifetime or free then the value is null.
     * @type {Date}
     * @memberof UserSubscription
     */
    periodEndsAt: any | null;
    /**
     * The type of subscription the user has. Options are following: free, recurring, and lifetime.
     * @type {string}
     * @memberof UserSubscription
     */
    type: UserSubscriptionTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum UserSubscriptionTypeEnum {
    Free = 'free',
    Recurring = 'recurring',
    Lifetime = 'lifetime'
}

