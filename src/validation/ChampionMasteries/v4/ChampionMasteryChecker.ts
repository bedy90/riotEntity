import { Interfaces } from '@/riotentity';

export function isIChampionMasteryDTO(obj: any): obj is Interfaces.ChampionMasteries.v4.IChampionMasteryDTO {
    return (
        'championPointsUntilNextLevel' in obj &&
        'chestGranted' in obj &&
        'championId' in obj &&
        'lastPlayTime' in obj &&
        'championLevel' in obj &&
        'summonerId' in obj &&
        'championPoints' in obj &&
        'championPointsSinceLastLevel' in obj
    );
}
