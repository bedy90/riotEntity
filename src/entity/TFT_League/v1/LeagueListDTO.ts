import { Interfaces } from '@/riotentity';

/**
 * Class LeagueListDTO_v1
 *
 * @namespace TFT_League
 * @version v1
 * @name ILeagueListDTO
 */
export class LeagueListDTO_v1 implements Interfaces.TFT_ILeagueListDTO_v1 {
    leagueId!: string;
    entries!: Interfaces.TFT_ILeagueItemDTO_v1[];
    tier!: string;
    name!: string;
    queue!: string;
}
