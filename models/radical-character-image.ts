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
 * @interface RadicalCharacterImage
 */
export interface RadicalCharacterImage {
    /**
     * The location of the image.
     * @type {string}
     * @memberof RadicalCharacterImage
     */
    url: any;
    /**
     * The content type of the image. Currently the API delivers image/png and image/svg+xml.
     * @type {string}
     * @memberof RadicalCharacterImage
     */
    contentType: any;
    /**
     * Details about the image. Each content_type returns a uniquely structured object.
     * @type {ImagePngMetadata | ImageSvgMetadata}
     * @memberof RadicalCharacterImage
     */
    metadata: any;
}
