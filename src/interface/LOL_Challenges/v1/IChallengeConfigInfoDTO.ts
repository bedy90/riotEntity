import { Declarations } from '../../../index.js';

/**
 * Interface IChallengeConfigInfoDTO
 *
 * @namespace LoL_Challenges
 * @version v1
 * @name IChallengeConfigInfoDTO
 * @prefix LOL_
 * @strict
 */
export interface IChallengeConfigInfoDTO_v1 {
    id: number;

    localizedNames: Map<string, Map<string, string>>;

    /**
     * - DISABLED - not visible and not calculated, HIDDEN - not visible, but calculated, ENABLED - visible and calculated, ARCHIVED - visible, but not calculated
     */
    state: Declarations.State | number;

    /**
     * LIFETIME - stats are incremented without reset, SEASON - stats are accumulated by season and reset at the beginning of new season
     */
    tracking: Declarations.Tracking | number;

    startTimestamp: number;

    endTimestamp: number;

    leaderboard: boolean;

    thresholds: Map<string, number>;
}
