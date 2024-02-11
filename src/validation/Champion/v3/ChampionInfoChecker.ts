import { Interfaces } from '@/riotentity';

export function isIChampionInfo(obj: any): obj is Interfaces.Champion.v3.IChampionInfo {
    const hasFields = (
        'maxNewPlayerLevel' in obj &&
        'freeChampionIdsForNewPlayers' in obj &&
        'freeChampionIds' in obj &&
        Object.keys(obj).length === 3
    );

    return hasFields;
}
