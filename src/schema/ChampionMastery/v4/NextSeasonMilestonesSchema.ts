import { z } from 'zod';
import { Interfaces } from '../../../index.js';
import { RewardConfig_Schema_v4 } from './RewardConfigSchema.js';

export const NextSeasonMilestones_Schema_v4 = z.object({
    requireGradeCounts: z.object({}).catchall(z.any()), // z.any(),
    rewardMarks:    z.number(),
    bonus:          z.boolean(),
    rewardConfig:   RewardConfig_Schema_v4,
})
.strict() satisfies z.ZodType<Interfaces.INextSeasonMilestonesDTO_v4>;
