import { Interfaces } from '@/riotentity';

/**
 * Interface ILeagueListDTO
 *
 * @namespace League
 * @version v4
 * @name ILeagueListDTO
 */
export interface ILeagueListDTO {
    leagueId: string;

    entries: Interfaces.League.v4.ILeagueItemDTO[];

    tier: string;

    name: string;

    queue: string;
}

