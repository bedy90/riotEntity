import { ILeagueItemDTO } from './ILeagueItemDTO';

/**
 * Interface TFT - ILeagueListDTO
 * 
 * @namespace TFT_League
 * @version v1
 * @name ILeagueListDTO
 */
export interface ILeagueListDTO {
    leagueId: string;

    entries: ILeagueItemDTO[];

    tier: string;

    name: string;
    
    queue: string;
}
