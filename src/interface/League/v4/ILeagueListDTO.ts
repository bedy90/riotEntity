import { ILeagueItemDTO } from './ILeagueItemDTO';

/**
 * Interface ILeagueListDTO
 * 
 * @namespace League
 * @version v4
 * @name ILeagueListDTO
 */
export interface ILeagueListDTO {
    leagueId: string;

    entries: ILeagueItemDTO[];

    tier: string;

    name: string;

    queue: string;
}

