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
 * @interface KanjiSubject
 */
export interface KanjiSubject extends CommonSubject {
    /**
     * An array of numeric identifiers for the vocabulary that have the kanji as a component.
     * @type {Array&lt;number&gt;}
     * @memberof KanjiSubject
     */
    amalgamationSubjectIds: any;
    /**
     * An array of numeric identifiers for the radicals that make up this kanji. Note that these are the subjects that must have passed assignments in order to unlock this subject's assignment.
     * @type {Array&lt;number&gt;}
     * @memberof KanjiSubject
     */
    componentSubjectIds: any;
    /**
     * Meaning hint for the kanji.
     * @type {string}
     * @memberof KanjiSubject
     */
    meaningHint:  | null;
    /**
     * Reading hint for the kanji.
     * @type {string}
     * @memberof KanjiSubject
     */
    readingHint:  | null;
    /**
     * The kanji's reading mnemonic.
     * @type {string}
     * @memberof KanjiSubject
     */
    readingMnemonic: any;
    /**
     * Selected readings for the kanji. See table below for the object structure.
     * @type {Array&lt;KanjiReading&gt;}
     * @memberof KanjiSubject
     */
    readings: any;
    /**
     * An array of numeric identifiers for kanji which are visually similar to the kanji in question.
     * @type {Array&lt;number&gt;}
     * @memberof KanjiSubject
     */
    visuallySimilarSubjectIds: any;
}
