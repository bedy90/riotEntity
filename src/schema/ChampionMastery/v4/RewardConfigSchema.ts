import { z } from 'zod';
import { Interfaces } from '../../../index.js';

export const RewardConfig_Schema_v4 = z.object({
    rewardValue: z.string(),
    rewardType: z.string(),
    maximumReward: z.number(),
}).strict() satisfies z.ZodType<Interfaces.IRewardConfigDTO_v4>;
