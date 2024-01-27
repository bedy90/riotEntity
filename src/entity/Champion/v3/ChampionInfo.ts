// --------------------------------------
// Interface
// --------------------------------------
export interface IChampionInfo {
    maxNewPlayerLevel: number;
    freeChampionIdsForNewPlayers: Array<number>;
    freeChampionIds: Array<number>;
}

// --------------------------------------
// Class
// --------------------------------------
export class ChampionInfo implements IChampionInfo {
    maxNewPlayerLevel!: number;
    freeChampionIdsForNewPlayers!: number[];
    freeChampionIds!: number[];

}

// --------------------------------------
// Checker
// --------------------------------------
export class ChampionInfoChecker {
    static isChampionInfoDTO(obj: any): obj is IChampionInfo {
        return (
            'maxNewPlayerLevel' in obj &&
            'freeChampionIdsForNewPlayers' in obj &&
            'freeChampionIds' in obj
        );
    }
}
