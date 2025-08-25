import { z } from 'zod';
import { Interfaces } from '../../../index.js';
import { NextSeasonMilestones_Schema_v4 } from './NextSeasonMilestonesSchema.js';

export const ChampionMasterySchema_v4 = z.object({
  puuid: z.string({ required_error: 'puuid is required' })
  .length(78, { message: 'puuid : Must be 78 characters long' })
  .nonempty({ message: 'puuid is required' }),
  championPointsUntilNextLevel: z.bigint(),
  chestGranted: z.boolean(),
  championId: z.bigint(),
  lastPlayTime: z.bigint(),
  championLevel: z.number().int(),
  championPoints: z.number().int(),
  championPointsSinceLastLevel: z.bigint(),
  markRequiredForNextLevel: z.number().int(),
  championSeasonMilestone: z.number().int(),
  nextSeasonMilestone: NextSeasonMilestones_Schema_v4,
  tokensEarned: z.number(),
  milestoneGrades: z.array(z.string()),
})
.strict() satisfies z.ZodType<Interfaces.IChampionMasteryDTO_v4>;

