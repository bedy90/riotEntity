// eslint-disable max-len
// eslint-disable no-shadow
import { Interfaces } from '../../../index.js';

/**
 * Interface IMatchDTO
 *
 * @namespace Match
 * @version v5
 * @name IMatchDTO
 * @strict
 */
export interface IMatchDTO_v5 {
    /**
     * Match metadata.
     */
    metadata: Interfaces.IMetadataDTO_v5;
    /**
     * Match info.
     */
    info: Interfaces.IInfoDTO_v5;
}
