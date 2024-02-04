import { Interfaces, Tracking, State } from '@/index';

export class ChallengeConfigInfoDTO implements Interfaces.Challenges.v1.IChallengeConfigInfoDTO {
    id!: number;
    localizedNames!: Map<string, Map<string, string>>;
    state!: State;
    tracking!: Tracking;
    startTimestamp!: number;
    endTimestamp!: number;
    leaderboard!: boolean;
    thresholds!: Map<string, number>;

}
