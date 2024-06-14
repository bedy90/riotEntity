import { Interfaces } from '@/riotentity';

export function isIChampionMasteryDTO(obj: any): obj is Interfaces.ChampionMastery.v4.IChampionMasteryDTO {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    const entityDTO = obj as Interfaces.ChampionMastery.v4.IChampionMasteryDTO;

    const hasFieldsIn: boolean = 'puuid' in entityDTO &&
                                'championPointsUntilNextLevel' in entityDTO &&
                                'chestGranted' in entityDTO &&
                                'championId' in entityDTO &&
                                'lastPlayTime' in entityDTO &&
                                'championLevel' in entityDTO &&
                                'championPoints' in entityDTO &&
                                'championPointsSinceLastLevel' in entityDTO &&
                                'tokensEarned' in entityDTO;

    const hasFieldCount: boolean = Object.keys(entityDTO).length === 9;

    const hasFieldType: boolean = (
        typeof entityDTO.puuid === 'string' &&
        typeof entityDTO.championPointsUntilNextLevel === 'number' &&
        typeof entityDTO.chestGranted === 'boolean' &&
        typeof entityDTO.championId === 'number' &&
        typeof entityDTO.lastPlayTime === 'number' &&
        typeof entityDTO.championLevel === 'number' &&
        typeof entityDTO.championPoints === 'number' &&
        typeof entityDTO.championPointsSinceLastLevel === 'number' &&
        typeof entityDTO.tokensEarned === 'number'
    );

    return hasFieldsIn && hasFieldCount && hasFieldType;
}