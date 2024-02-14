export interface IChampionInfo {
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

