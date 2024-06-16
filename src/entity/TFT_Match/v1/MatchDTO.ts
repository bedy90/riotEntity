import { Interfaces } from '@/riotentity';

/**
 * Class MatchDTO
 *
 * @namespace TFT_Match
 * @version v1
 * @name IMatchDTO
 */
export class MatchDTO implements Interfaces.TFT_Match.v1.IMatchDTO {
    metadata!: Interfaces.TFT_Match.v1.IMetadataDTO;
    info!: Interfaces.TFT_Match.v1.IInfoDTO;
}
