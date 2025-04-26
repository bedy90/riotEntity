import { Interfaces } from '@/riotentity';

/**
 * Class ChampionMasteryDTO_v4
 *
 * @namespace ChampionMastery
 * @version v4
 * @name IChampionMasteryDTO
 */
export class ChampionMasteryDTO_v4 implements Interfaces.IChampionMasteryDTO_v4 {
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
