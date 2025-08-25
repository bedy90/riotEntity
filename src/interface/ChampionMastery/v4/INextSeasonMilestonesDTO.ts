import { Interfaces } from '../../../index.js';

/**
 * Interface NextSeasonMilestonesDto
 *
 * @namespace ChampionMastery
 * @version v4
 * @name INextSeasonMilestonesDTO
 * @strict
 */
export interface INextSeasonMilestonesDTO_v4 {
    requireGradeCounts: object;

    /**
     * Reward marks
     */
    rewardMarks: number;

    /**
     * Bonus
     */
    bonus: boolean;

    /**
     * Reward configuration.
     */
    rewardConfig: Interfaces.IRewardConfigDTO_v4;
}
