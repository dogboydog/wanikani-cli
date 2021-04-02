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
 import {CommonSubject} from './common-subject';
/**
 * 
 * @export
 * @interface RadicalSubject
 */
export interface RadicalSubject extends CommonSubject {
    /**
     * An array of numeric identifiers for the kanji that have the radical as a component.
     * @type {Array&lt;number&gt;}
     * @memberof RadicalSubject
     */
    amalgamationSubjectIds: any;
    /**
     * Unlike kanji and vocabulary, radicals can have a null value for characters. Not all radicals have a UTF entry, so the radical must be visually represented with an image instead.
     * @type {string}
     * @memberof RadicalSubject
     */
    characters:  | null;
    /**
     * A collection of images of the radical. See table below for the object structure.
     * @type {Array&lt;RadicalCharacterImage&gt;}
     * @memberof RadicalSubject
     */
    characterImages: any;
}
