import { IMiniSeriesDTO } from './IMiniSeriesDTO';

export interface ILeagueEntryDTO {
    leagueId: string;
    /**
     * 	Player's summonerId (Encrypted)
     */
    summonerId: string;
    summonerName: string;
    queueType: string;
    /**
     * Only included for the RANKED_TFT_TURBO queueType. (Legal values: ORANGE, PURPLE, BLUE, GREEN, GRAY)
     */
    ratedTier: string;
    /**
     * Only included for the RANKED_TFT_TURBO queueType.
     */
    ratedRating: string;
    /**
     * Not included for the RANKED_TFT_TURBO queueType.
     */
    tier: string;
    /**
     * 	The player's division within a tier. Not included for the RANKED_TFT_TURBO queueType.
     */
    rank: string;
    /**
     * Not included for the RANKED_TFT_TURBO queueType.
     */
    leaguePoints: number;
    /**
     * First placement in Teamfight Tactics.
     */
    wins: number;
    /**
     * Second through eighth placement in Teamfight Tactics.
     */
    losses: number;
    /**
     * Not included for the RANKED_TFT_TURBO queueType.
     */
    hotStreak: boolean;
     /**
     * Not included for the RANKED_TFT_TURBO queueType.
     */
    veteran: boolean;
     /**
     * Not included for the RANKED_TFT_TURBO queueType.
     */
    freshBlood: boolean;
     /**
     * Not included for the RANKED_TFT_TURBO queueType.
     */
    inactive: boolean;
     /**
     * Not included for the RANKED_TFT_TURBO queueType.
     */
    miniSeries: IMiniSeriesDTO;
}
