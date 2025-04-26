import { Interfaces } from '@/riotentity';

/**
 * Class MatchDTO_v5
 *
 * @namespace Match
 * @version v5
 * @name IMatchDTO
 */
export class MatchDTO_v5 implements Interfaces.IMatchDTO_v5 {
    metadata!: Interfaces.IMetadataDTO_v5;
    info!: Interfaces.IInfoDTO_v5;
}
