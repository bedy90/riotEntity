import { Interfaces } from '@/riotentity';

/**
 * Class LeagueListDTO
 *
 * @namespace League
 * @version v4
 * @name ILeagueListDTO
 */
export class LeagueListDTO implements Interfaces.League.v4.ILeagueListDTO {
    leagueId!: string;
    entries!: Interfaces.League.v4.ILeagueItemDTO[];
    tier!: string;
    name!: string;
    queue!: string;
}
