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
 * User settings specific to the WaniKani application. See table below for the object structure.
 * @export
 * @interface UserPreferences
 */
export interface UserPreferences {
    /**
     * The voice actor to be used for lessons and reviews. The value is associated to subject.pronunciation_audios.metadata.voice_actor_id.
     * @type {number}
     * @memberof UserPreferences
     */
    defaultVoiceActorId: any;
    /**
     * Automatically play pronunciation audio for vocabulary during lessons.
     * @type {boolean}
     * @memberof UserPreferences
     */
    lessonsAutoplayAudio: any;
    /**
     * Number of subjects introduced to the user during lessons before quizzing.
     * @type {number}
     * @memberof UserPreferences
     */
    lessonsBatchSize: any;
    /**
     * The order in which lessons are presented. The options are ascending_level_then_subject, shuffled, and ascending_level_then_shuffled. The default (and best experience) is ascending_level_then_subject.
     * @type {string}
     * @memberof UserPreferences
     */
    lessonsPresentationOrder: UserPreferencesLessonsPresentationOrderEnum;
    /**
     * Automatically play pronunciation audio for vocabulary during reviews.
     * @type {boolean}
     * @memberof UserPreferences
     */
    reviewsAutoplayAudio: any;
    /**
     * Toggle for display SRS change indicator after a subject has been completely answered during review.
     * @type {boolean}
     * @memberof UserPreferences
     */
    reviewsDisplaySrsIndicator: any;
}

/**
    * @export
    * @enum {string}
    */
export enum UserPreferencesLessonsPresentationOrderEnum {
    AscendingLevelThenSubject = 'ascending_level_then_subject',
    Shuffled = 'shuffled',
    AscendingLevelThenShuffled = 'ascending_level_then_shuffled'
}

