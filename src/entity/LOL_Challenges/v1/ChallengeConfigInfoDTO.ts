import { Interfaces } from '@/riotentity';
import { State, Tracking } from '@/riotentity';

export class ChallengeConfigInfoDTO implements Interfaces.LoL_Challenges.v1.IChallengeConfigInfoDTO {
    id!: number;
    localizedNames!: Map<string, Map<string, string>>;
    state!: State | number;
    tracking!: Tracking | number;
    startTimestamp!: number;
    endTimestamp!: number;
    leaderboard!: boolean;
    thresholds!: Map<string, number>;
}
