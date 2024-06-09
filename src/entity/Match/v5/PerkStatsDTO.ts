import { Interfaces } from '@/riotentity';

/**
 * Class PerkStatsDTO
 *
 * @namespace Match
 * @version v5
 * @name IPerkStatsDTO
 */
export class PerkStatsDTO implements Interfaces.Match.v5.IPerkStatsDTO {
    defense!: number;
    flex!: number;
    offense!: number;
}
