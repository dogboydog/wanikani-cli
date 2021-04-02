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
 * @interface VocabSubject
 */
export interface VocabSubject extends CommonSubject {
    /**
     * An array of numeric identifiers for the kanji that make up this vocabulary. Note that these are the subjects that must be have passed assignments in order to unlock this subject's assignment.
     * @type {Array&lt;number&gt;}
     * @memberof VocabSubject
     */
    componentSubjectIds: any;
    /**
     * A collection of context sentences. See table below for the object structure.
     * @type {Array&lt;ContextSentence&gt;}
     * @memberof VocabSubject
     */
    contextSentences: any;
    /**
     * The subject's meaning mnemonic.
     * @type {string}
     * @memberof VocabSubject
     */
    meaningMnemonic: any;
    /**
     * Parts of speech.
     * @type {Array&lt;string&gt;}
     * @memberof VocabSubject
     */
    partsOfSpeech: any;
    /**
     * A collection of pronunciation audio. See table below for the object structure.
     * @type {Array&lt;PronunciationAudio&gt;}
     * @memberof VocabSubject
     */
    pronunciationAudios: any;
    /**
     * Selected readings for the vocabulary. See table below for the object structure.
     * @type {Array&lt;VocabReading&gt;}
     * @memberof VocabSubject
     */
    readings: any;
    /**
     * The subject's reading mnemonic.
     * @type {string}
     * @memberof VocabSubject
     */
    readingMnemonic: any;
}
