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
import {BaseReading} from './base-reading';

/**
 * 
 * @export
 * @interface KanjiReading
 */
export interface KanjiReading extends BaseReading {
    /**
     * The kanji reading's classfication: kunyomi, nanori, or onyomi.
     * @type {string}
     * @memberof KanjiReading
     */
    type: KanjiReadingTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum KanjiReadingTypeEnum {
    Kunyomi = 'kunyomi',
    Nanori = 'nanori',
    Onyomi = 'onyomi'
}

