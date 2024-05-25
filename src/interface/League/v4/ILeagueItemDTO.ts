import { IMiniSeriesDTO } from './IMiniSeriesDTO';

export interface ILeagueItemDTO {
    freshBlood: boolean;

    /**
     * 	Winning team on Summoners Rift.
     */
    wins: number;

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

