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
 * @interface AuxiliaryMeaning
 */
export interface AuxiliaryMeaning {
    /**
     * A singular subject meaning.
     * @type {string}
     * @memberof AuxiliaryMeaning
     */
    meaning: any;
    /**
     * Either whitelist or blacklist. When evaluating user input, whitelisted meanings are used to match for correctness. Blacklisted meanings are used to match for incorrectness.
     * @type {string}
     * @memberof AuxiliaryMeaning
     */
    type: any;
}
