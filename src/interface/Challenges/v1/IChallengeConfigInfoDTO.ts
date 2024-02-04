import { State, Tracking } from "@/declaration";

export interface IChallengeConfigInfoDTO {
    id: number;
    localizedNames: Map<string, Map<string, string>>;
    /**
     * - DISABLED - not visible and not calculated, HIDDEN - not visible, but calculated, ENABLED - visible and calculated, ARCHIVED - visible, but not calculated
     */
    state: State;
    /**
     * LIFETIME - stats are incremented without reset, SEASON - stats are accumulated by season and reset at the beginning of new season
     */
    tracking: Tracking;
    startTimestamp: number;
    endTimestamp: number;
    leaderboard: boolean;
    thresholds: Map<string, number>;
}
