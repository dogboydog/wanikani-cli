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
 * @interface BaseCollection
 */
export interface BaseCollection {
    /**
     * 
     * @type {CollectionObjectType}
     * @memberof BaseCollection
     */
    object: any;
    /**
     * 
     * @type {string}
     * @memberof BaseCollection
     */
    url: any;
    /**
     * 
     * @type {BaseCollectionPages}
     * @memberof BaseCollection
     */
    pages: any;
    /**
     * 
     * @type {number}
     * @memberof BaseCollection
     */
    totalCount: any;
    /**
     * 
     * @type {Date}
     * @memberof BaseCollection
     */
    dataUpdatedAt: any;
}
