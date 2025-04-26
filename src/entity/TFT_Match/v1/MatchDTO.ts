import { Interfaces } from '@/riotentity';

/**
 * Class MatchDTO_v1
 *
 * @namespace TFT_Match
 * @version v1
 * @name IMatchDTO
 */
export class MatchDTO_v1 implements Interfaces.TFT_IMatchDTO_v1 {
    metadata!: Interfaces.TFT_IMetadataDTO_v1;
    info!: Interfaces.TFT_IInfoDTO_v1;
}
