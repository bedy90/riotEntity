import { Interfaces } from "@/riotentity";

/**
 * Interface TFT - ILeagueItemDTO
 * 
 * @namespace TFT_League
 * @version v1
 * @name ILeagueItemDTO
 */
export interface ILeagueItemDTO {
    freshBlood: boolean;

    /**
     * 	Winning team on Summoners Rift.
     */
    wins: number;

    miniSeries: Interfaces.TFT_League.v1.IMiniSeriesDTO;

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

