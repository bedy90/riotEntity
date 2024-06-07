/**
 * Interface IBannedChampion_Global
 *
 * @namespace Global
 * @name IBannedChampion_Global
 */
export interface IBannedChampion_Global {
    /**
     * 	The turn during which the champion was banned
     */
    pickTurn: number;

    /**
     * The ID of the banned champion
     */
    championId: number;

    /**
     * The ID of the team that banned the champion
     */
    teamId: number;
}