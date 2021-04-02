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
 * @interface PronunciationAudio
 */
export interface PronunciationAudio {
    /**
     * The location of the audio.
     * @type {string}
     * @memberof PronunciationAudio
     */
    url: any;
    /**
     * The content type of the audio. Currently the API delivers audio/mpeg and audio/ogg.
     * @type {string}
     * @memberof PronunciationAudio
     */
    contentType: any;
    /**
     * 
     * @type {PronunciationAudioMetadata}
     * @memberof PronunciationAudio
     */
    metadata: any;
}
