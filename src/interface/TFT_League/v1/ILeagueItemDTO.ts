import { Interfaces } from '../../../index.js';

/**
 * Interface TFT - ILeagueItemDTO
 *
 * @namespace TFT_League
 * @version v1
 * @name ILeagueItemDTO
 * @prefix TFT_
 */
export interface ILeagueItemDTO_v1 {
    freshBlood: boolean;

    /**
     * 	Winning team on Summoners Rift.
     */
    wins: number;

    miniSeries: Interfaces.ITFT_MiniSeriesDTO_v1;

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
     * TODO
     */
    summonerId: string;
}

