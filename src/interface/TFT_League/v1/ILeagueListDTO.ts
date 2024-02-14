import { IMiniSeriesDTO } from "./IMiniSeriesDTO";

export interface ILeagueListDTO {
    leagueId: string;
    entries: ILeagueItemDTO[];
    tier: string;
    name: string;
    queue: string;
}

export interface ILeagueItemDTO {
    freshBlood: boolean;
    /**
     * 	Winning team on Summoners Rift.
     */
    wins: number;
    summonerName: string;
    miniSeries: IMiniSeriesDTO;
    inactive: boolean;
    veteran: boolean;
    hotStreak: boolean;
    rank: string;
    leaguePoints: number;
    /**
     * Losing team on Summoners Rift.
     */
    losses: number;
    /**
     * Player's encrypted summonerId.
     */
    summonerId: string;
}

