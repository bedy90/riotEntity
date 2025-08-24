/**
 * Interface IChampionInfo
 *
 * @namespace Champion
 * @version v3
 * @name IChampionInfo
 * @strict
 */
export interface IChampionInfo_v3 {
    /**
     * The maximum level required to be considered a "newPlayer".
     */
    maxNewPlayerLevel: number;

    /**
     * Champion rotate for "newPlayer"
     */
    freeChampionIdsForNewPlayers: number[];

    /**
     * Champion rotate. (for all player we are not a "newPlayer")
     */
    freeChampionIds: number[];
}

