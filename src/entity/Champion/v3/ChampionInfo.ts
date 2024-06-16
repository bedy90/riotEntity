import { Interfaces } from '@/riotentity';

/**
 * Class ChampionInfo
 *
 * @namespace Champion
 * @version v3
 * @name IChampionInfo
 */
export class ChampionInfo implements Interfaces.Champion.v3.IChampionInfo {
    maxNewPlayerLevel!: number;
    freeChampionIdsForNewPlayers!: number[];
    freeChampionIds!: number[];
}
