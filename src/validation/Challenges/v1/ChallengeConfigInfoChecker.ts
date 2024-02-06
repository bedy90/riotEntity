import { Interfaces } from '@/index';

export function isIChallengeConfigInfoDTO(obj: any): obj is Interfaces.Challenges.v1.IChallengeConfigInfoDTO {
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