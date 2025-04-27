// eslint-disable max-len
// eslint-disable no-shadow
import { Interfaces } from '@/riotentity';

/**
 * Interface TFT - IMatchDTO
 *
 * @namespace TFT_Match
 * @version v1
 * @name IMatchDTO
 * @prefix TFT_
 */
export interface IMatchDTO_v1 {
    /**
     * Match metadata.
     */
    metadata: Interfaces.TFT_IMetadataDTO_v1;

    /**
     * Match info.
     */
    info: Interfaces.TFT_IInfoDTO_v1;
}