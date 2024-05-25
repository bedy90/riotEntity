import { ILeagueItemDTO } from './ILeagueItemDTO';

export interface ILeagueListDTO {
    leagueId: string;

    entries: ILeagueItemDTO[];

    tier: string;

    name: string;
    
    queue: string;
}
