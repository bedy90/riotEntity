import { IMiniSeriesDTO_Global } from './IMiniSeriesDTO_Global';

/**
 * Interface ILeagueEntryDTO_Global
 *
 * @namespace Global
 * @version v1
 * @name ILeagueEntryDTO_Global
 */
export interface ILeagueEntryDTO_Global {
    leagueId: string;

    /**
     * 	Player's summonerId (Encrypted)
     */
    summonerId: string;

    queueType: string;

    tier: string;

    /**
     * The player's division within a tier.
     */
    rank: string;

    leaguePoints: number;

    /**
     * Winning team on Summoners Rift. First placement in Teamfight Tactics.
     */
    wins: number;

    /**
     * Losing team on Summoners Rift. Second through eighth placement in Teamfight Tactics.
     */
    losses: number;

    hotStreak: boolean;

    veteran: boolean;

    freshBlood: boolean;

    inactive: boolean;

    miniSeries?: IMiniSeriesDTO_Global;
}
