import { Interfaces } from '@/riotentity';

/**
 * Class MatchDTO
 *
 * @namespace Match
 * @version v5
 * @name IMatchDTO
 */
export class MatchDTO implements Interfaces.Match.v5.IMatchDTO {
    metadata!: Interfaces.Match.v5.IMetadataDTO;
    info!: Interfaces.Match.v5.IInfoDTO;
}
