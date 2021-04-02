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
 import {BaseResource} from './base-resource';
/**
 * 
 * @export
 * @interface Subject
 */
export interface Subject extends BaseResource {
    /**
     * 
     * @type {RadicalSubject | KanjiSubject | VocabSubject}
     * @memberof Subject
     */
    data: any;
}
