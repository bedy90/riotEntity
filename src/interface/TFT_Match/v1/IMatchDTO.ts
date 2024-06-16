/* eslint-disable max-len */
/* eslint-disable no-shadow */
import { Interfaces } from '@/riotentity';

/**
 * Interface TFT - IMatchDTO
 *
 * @namespace TFT_Match
 * @version v1
 * @name IMatchDTO
 */
export interface IMatchDTO {
    /**
     * Match metadata.
     */
    metadata: Interfaces.TFT_Match.v1.IMetadataDTO;

    /**
     * Match info.
     */
    info: Interfaces.TFT_Match.v1.IInfoDTO;
}