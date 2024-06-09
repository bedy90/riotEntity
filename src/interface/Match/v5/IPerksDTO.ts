import { Interfaces } from '@/riotentity';

/**
 * Interface IPerksDTO
 *
 * @namespace Match
 * @version v5
 * @name IPerksDTO
 */
export interface IPerksDTO {
    statPerks: Interfaces.Match.v5.IPerkStatsDTO;
    styles: Interfaces.Match.v5.IPerkStyleDTO[];
}
