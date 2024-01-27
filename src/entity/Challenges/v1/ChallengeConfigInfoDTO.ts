import { State, Tracking } from '../../../declaration';

// --------------------------------------
// Interface
// --------------------------------------
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

// --------------------------------------
// Class
// --------------------------------------
export class ChallengeConfigInfoDTO implements IChallengeConfigInfoDTO {
    id!: number;
    localizedNames!: Map<string, Map<string, string>>;
    state!: State;
    tracking!: Tracking;
    startTimestamp!: number;
    endTimestamp!: number;
    leaderboard!: boolean;
    thresholds!: Map<string, number>;

}

// --------------------------------------
// Checker
// --------------------------------------
export class ChallengeConfigInfoChecker {
    static isDTO(obj: any): obj is IChallengeConfigInfoDTO {
        return (
            'id' in obj &&
            'localizedNames' in obj &&
            'state' in obj &&
            'tracking' in obj &&
            'startTimestamp' in obj &&
            'endTimestamp' in obj &&
            'leaderboard' in obj &&
            'thresholds' in obj
        );
    }
}
