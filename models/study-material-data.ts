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
 * @interface StudyMaterialData
 */
export interface StudyMaterialData {
    /**
     * Timestamp when the study material was created.
     * @type {Date}
     * @memberof StudyMaterialData
     */
    createdAt: any;
    /**
     * Indicates if the associated subject has been hidden, preventing it from appearing in lessons or reviews.
     * @type {boolean}
     * @memberof StudyMaterialData
     */
    hidden: any;
    /**
     * Free form note related to the meaning(s) of the associated subject.
     * @type {string}
     * @memberof StudyMaterialData
     */
    meaningNote: any | null;
    /**
     * Synonyms for the meaning of the subject. These are used as additional correct answers during reviews.
     * @type {Array&lt;string&gt;}
     * @memberof StudyMaterialData
     */
    meaningSynonyms: any;
    /**
     * Free form note related to the reading(s) of the associated subject.
     * @type {string}
     * @memberof StudyMaterialData
     */
    readingNote: any | null;
    /**
     * Unique identifier of the associated subject.
     * @type {number}
     * @memberof StudyMaterialData
     */
    subjectId: any;
    /**
     * 
     * @type {SubjectType}
     * @memberof StudyMaterialData
     */
    subjectType: any;
}
