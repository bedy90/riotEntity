import { Interfaces } from '@/riotentity';

export class ChampionInfo implements Interfaces.Champion.v3.IChampionInfo {
    maxNewPlayerLevel!: number;
    freeChampionIdsForNewPlayers!: number[];
    freeChampionIds!: number[];

}
