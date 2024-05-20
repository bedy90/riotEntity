import { Interfaces } from '@/riotentity';

export class ChampionMasteryDTO implements Interfaces.ChampionMasteries.v4.IChampionMasteryDTO {
    puuid!: string;
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
