import { Interfaces } from '@/riotentity';

export class ChampionMasteryDTO implements Interfaces.ChampionMastery.v4.IChampionMasteryDTO {
    puuid!: string;
    championPointsUntilNextLevel!: number;
    chestGranted!: boolean;
    championId!: number;
    lastPlayTime!: number;
    championLevel!: number;
    championPoints!: number;
    championPointsSinceLastLevel!: number;
    tokensEarned!: number;
}
