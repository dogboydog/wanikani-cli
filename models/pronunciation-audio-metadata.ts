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
 * Details about the pronunciation audio. See table below for details.
 * @export
 * @interface PronunciationAudioMetadata
 */
export interface PronunciationAudioMetadata {
    /**
     * The gender of the voice actor.
     * @type {string}
     * @memberof PronunciationAudioMetadata
     */
    gender: any;
    /**
     * A unique ID shared between same source pronunciation audio.
     * @type {number}
     * @memberof PronunciationAudioMetadata
     */
    sourceId: any;
    /**
     * Vocabulary being pronounced in kana.
     * @type {string}
     * @memberof PronunciationAudioMetadata
     */
    pronunciation: any;
    /**
     * A unique ID belonging to the voice actor.
     * @type {number}
     * @memberof PronunciationAudioMetadata
     */
    voiceActorId: any;
    /**
     * Humanized name of the voice actor.
     * @type {string}
     * @memberof PronunciationAudioMetadata
     */
    voiceActorName: any;
    /**
     * Description of the voice.
     * @type {string}
     * @memberof PronunciationAudioMetadata
     */
    voiceDescription: any;
}
