import { State, Tracking } from '@/riotentity';

/**
 * Interface IChallengeConfigInfoDTO
 * 
 * @namespace LoL_Challenges
 * @version v1
 * @name IChallengeConfigInfoDTO
 */
export interface IChallengeConfigInfoDTO {
    id: number;

    localizedNames: Map<string, Map<string, string>>;

    /**
     * - DISABLED - not visible and not calculated, HIDDEN - not visible, but calculated, ENABLED - visible and calculated, ARCHIVED - visible, but not calculated
     */
    state: State | number;

    /**
     * LIFETIME - stats are incremented without reset, SEASON - stats are accumulated by season and reset at the beginning of new season
     */
    tracking: Tracking | number;

    startTimestamp: number;

    endTimestamp: number;

    leaderboard: boolean;

    thresholds: Map<string, number>;
}
