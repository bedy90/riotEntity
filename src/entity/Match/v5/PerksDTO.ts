import { Interfaces } from '@/riotentity';

/**
 * Class PerksDTO_v5
 *
 * @namespace Match
 * @version v5
 * @name IPerksDTO
 */
export class PerksDTO_v5 implements Interfaces.IPerksDTO_v5 {
    statPerks!: Interfaces.IPerkStatsDTO_v5;
    styles!: Interfaces.IPerkStyleDTO_v5[];
}
