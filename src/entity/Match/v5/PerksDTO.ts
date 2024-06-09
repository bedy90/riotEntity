import { Interfaces } from '@/riotentity';

/**
 * Class PerksDTO
 *
 * @namespace Match
 * @version v5
 * @name IPerksDTO
 */
export class PerksDTO implements Interfaces.Match.v5.IPerksDTO {
    statPerks!: Interfaces.Match.v5.IPerkStatsDTO;
    styles!: Interfaces.Match.v5.IPerkStyleDTO[];
}
