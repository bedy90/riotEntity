import { Interfaces } from '@/index';

export class ChampionInfo implements Interfaces.Champion.v3.IChampionInfo {
    maxNewPlayerLevel!: number;
    freeChampionIdsForNewPlayers!: number[];
    freeChampionIds!: number[];

}
