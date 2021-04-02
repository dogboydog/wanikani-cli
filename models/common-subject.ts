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
 * @interface CommonSubject
 */
export interface CommonSubject {
    /**
     * Collection of auxiliary meanings. See table below for the object structure.
     * @type {Array&lt;AuxiliaryMeaning&gt;}
     * @memberof CommonSubject
     */
    auxiliaryMeanings: any;
    /**
     * The UTF-8 characters for the subject, including kanji and hiragana.
     * @type {string}
     * @memberof CommonSubject
     */
    characters: any;
    /**
     * Timestamp when the subject was created.
     * @type {Date}
     * @memberof CommonSubject
     */
    createdAt: any;
    /**
     * A URL pointing to the page on wanikani.com that provides detailed information about this subject.
     * @type {string}
     * @memberof CommonSubject
     */
    documentUrl: any;
    /**
     * Timestamp when the subject was hidden, indicating associated assignments will no longer appear in lessons or reviews and that the subject page is no longer visible on wanikani.com.
     * @type {Date}
     * @memberof CommonSubject
     */
    hiddenAt: any | null;
    /**
     * The position that the subject appears in lessons. Note that the value is scoped to the level of the subject, so there are duplicate values across levels.
     * @type {number}
     * @memberof CommonSubject
     */
    lessonPosition: any;
    /**
     * The level of the subject, from 1 to 60.
     * @type {number}
     * @memberof CommonSubject
     */
    level: any;
    /**
     * The subject's meaning mnemonic.
     * @type {string}
     * @memberof CommonSubject
     */
    meaningMnemonic: any;
    /**
     * The subject meanings.
     * @type {Array&lt;Meaning&gt;}
     * @memberof CommonSubject
     */
    meanings: any;
    /**
     * The string that is used when generating the document URL for the subject. Radicals use their meaning, downcased. Kanji and vocabulary use their characters.
     * @type {string}
     * @memberof CommonSubject
     */
    slug: any;
    /**
     * Unique identifier of the associated spaced_repetition_system.
     * @type {number}
     * @memberof CommonSubject
     */
    spacedRepetitionSystemId: any;
}
