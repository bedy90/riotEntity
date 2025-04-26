import { Interfaces } from '@/riotentity';

/**
 * Class LeagueListDTO_v4
 *
 * @namespace League
 * @version v4
 * @name ILeagueListDTO
 */
export class LeagueListDTO_v4 implements Interfaces.ILeagueListDTO_v4 {
    leagueId!: string;
    entries!: Interfaces.ILeagueItemDTO_v4[];
    tier!: string;
    name!: string;
    queue!: string;
}
