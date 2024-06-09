/* eslint-disable max-len */
/* eslint-disable no-shadow */
import { Interfaces } from '@/riotentity';

/**
 * Interface IMatchDTO
 *
 * @namespace Match
 * @version v5
 * @name IMatchDTO
 */
export interface IMatchDTO {
    /**
     * Match metadata.
     */
    metadata: Interfaces.Match.v5.IMetadataDTO;
    /**
     * Match info.
     */
    info: Interfaces.Match.v5.IInfoDTO;
}
