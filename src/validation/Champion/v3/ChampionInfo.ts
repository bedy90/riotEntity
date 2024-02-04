import { Interfaces } from '@/index';

export function isIChampionInfo(obj: any): obj is Interfaces.Champion.v3.IChampionInfo {
    return (
        'maxNewPlayerLevel' in obj &&
        'freeChampionIdsForNewPlayers' in obj &&
        'freeChampionIds' in obj
    );
}
