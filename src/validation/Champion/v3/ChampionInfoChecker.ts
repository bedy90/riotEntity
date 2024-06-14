import { Interfaces } from '@/riotentity';

export function isIChampionInfo(obj: any): obj is Interfaces.Champion.v3.IChampionInfo {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }

    const entityDTO = obj as Interfaces.Champion.v3.IChampionInfo;

    const hasFieldsIn: boolean = 'maxNewPlayerLevel' in entityDTO && 'freeChampionIdsForNewPlayers' in entityDTO && 'freeChampionIds' in entityDTO;
    const hasFieldCount: boolean = Object.keys(entityDTO).length === 3;

    const hasFieldType: boolean = (
        typeof entityDTO.maxNewPlayerLevel === 'string'
    );

    const arrayHasFieldType : boolean = (
        Array.isArray(entityDTO.freeChampionIdsForNewPlayers) &&
        entityDTO.freeChampionIdsForNewPlayers.every(id => typeof id === 'number') &&
        Array.isArray(entityDTO.freeChampionIds) &&
        entityDTO.freeChampionIds.every(id => typeof id === 'number')
    );

    return hasFieldsIn && hasFieldCount && hasFieldType && arrayHasFieldType;
}