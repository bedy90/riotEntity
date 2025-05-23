import { Interfaces } from '@/riotentity';

/**
 * Interface ILeagueItemDTO
 *
 * @namespace League
 * @version v4
 * @name ILeagueItemDTO
 */
export interface ILeagueItemDTO_v4 {
    freshBlood: boolean;

    /**
     * 	Winning team on Summoners Rift.
     */
    wins: number;

    miniSeries: Interfaces.IMiniSeriesDTO_v4;

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