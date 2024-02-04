import { Interfaces } from '@/index';

export class ChampionMasteryDTO implements Interfaces.ChampionMasteries.v4.IChampionMasteryDTO {
    championPointsUntilNextLevel!: number;
    chestGranted!: boolean;
    championId!: number;
    lastPlayTime!: number;
    championLevel!: number;
    summonerId!: string;
    championPoints!: number;
    championPointsSinceLastLevel!: number;
    tokensEarned!: number;

}
