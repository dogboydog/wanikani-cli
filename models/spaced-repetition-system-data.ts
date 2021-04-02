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
 * @interface SpacedRepetitionSystemData
 */
export interface SpacedRepetitionSystemData {
    /**
     * position of the burning stage.
     * @type {number}
     * @memberof SpacedRepetitionSystemData
     */
    burningStagePosition: any;
    /**
     * Timestamp when the spaced_repetition_system was created.
     * @type {Date}
     * @memberof SpacedRepetitionSystemData
     */
    createdAt: any;
    /**
     * Details about the spaced repetition system.
     * @type {string}
     * @memberof SpacedRepetitionSystemData
     */
    description: any;
    /**
     * The name of the spaced repetition system
     * @type {string}
     * @memberof SpacedRepetitionSystemData
     */
    name: any;
    /**
     * position of the passing stage.
     * @type {number}
     * @memberof SpacedRepetitionSystemData
     */
    passingStagePosition: any;
    /**
     * A collection of stages. See table below for the object structure.
     * @type {Array&lt;StageAttributes&gt;}
     * @memberof SpacedRepetitionSystemData
     */
    stages: any;
    /**
     * position of the starting stage.
     * @type {number}
     * @memberof SpacedRepetitionSystemData
     */
    startingStagePosition: any;
    /**
     * position of the unlocking stage.
     * @type {number}
     * @memberof SpacedRepetitionSystemData
     */
    unlockingStagePosition: any;
}
