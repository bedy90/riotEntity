import { Interfaces } from '../../../index.js';

/**
 * Interface ILeagueListDTO
 *
 * @namespace League
 * @version v4
 * @name ILeagueListDTO
 */
export interface ILeagueListDTO_v4 {
    leagueId: string;

    entries: Interfaces.ILeagueItemDTO_v4[];

    tier: string;

    name: string;

    queue: string;
}

