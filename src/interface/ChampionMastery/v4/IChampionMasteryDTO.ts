import { Interfaces } from '../../../index.js';

/**
 * Interface IChampionMasteryDTO
 *
 * @namespace ChampionMastery
 * @version v4
 * @name IChampionMasteryDTO
 * @strict
 */
export interface IChampionMasteryDTO_v4 {
    /**
    * Player Universal Unique Identifier
    * @length 78
    */
    puuid: string;

    /**
     * Number of points needed to achieve next level. Zero if player reached maximum champion level for this champion.
     */
    championPointsUntilNextLevel: bigint;

    /**
     * Is chest granted for this champion or not in current season.
     */
    chestGranted: boolean;

    /**
     * Champion ID for this entry.
     */
    championId: bigint;

    /**
     * Last time this champion was played by this player - in Unix milliseconds time format.
     */
    lastPlayTime: bigint;

    /**
     * 	Champion level for specified player and champion combination.
     */
    championLevel: number;

    /**
     * Total number of champion points for this player and champion combination - they are used to determine championLevel.
     */
    championPoints: number;

    /**
     * Number of points earned since current level has been achieved.
     */
    championPointsSinceLastLevel: bigint;

    markRequiredForNextLevel: number;

    championSeasonMilestone: number;

    nextSeasonMilestone: Interfaces.INextSeasonMilestonesDTO_v4;

    /**
     * 	The token earned for this champion at the current championLevel. When the championLevel is advanced the tokensEarned resets to 0.
     */
    tokensEarned: number;

    milestoneGrades: string[];
}
