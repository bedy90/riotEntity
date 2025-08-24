// eslint-disable max-len
// eslint-disable no-shadow
import { Interfaces } from '../../../index.js';

/**
 * Interface TFT - IMatchDTO
 *
 * @namespace TFT_Match
 * @version v1
 * @name IMatchDTO
 * @prefix TFT_
 * @strict
 */
export interface IMatchDTO_v1 {
    /**
     * Match metadata.
     */
    metadata: Interfaces.ITFT_MetadataDTO_v1;

    /**
     * Match info.
     */
    info: Interfaces.ITFT_InfoDTO_v1;
}