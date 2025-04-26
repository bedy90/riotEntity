import { Interfaces } from '@/riotentity';
import { State, Tracking } from '@/riotentity';

/**
 * Class ChallengeConfigInfoDTO_v1
 *
 * @namespace LoL_Challenges
 * @version v1
 * @name IChallengeConfigInfoDTO
 */
export class ChallengeConfigInfoDTO_v1 implements Interfaces.IChallengeConfigInfoDTO_v1 {
    id!: number;
    localizedNames!: Map<string, Map<string, string>>;
    state!: State | number;
    tracking!: Tracking | number;
    startTimestamp!: number;
    endTimestamp!: number;
    leaderboard!: boolean;
    thresholds!: Map<string, number>;
}
