import { Interfaces } from '@/riotentity';

/**
 * Class ChampionInfo_v3
 *
 * @namespace Champion
 * @version v3
 * @name IChampionInfo
 */
export class ChampionInfo_v3 implements Interfaces.IChampionInfo_v3 {
    maxNewPlayerLevel!: number;
    freeChampionIdsForNewPlayers!: number[];
    freeChampionIds!: number[];
}
