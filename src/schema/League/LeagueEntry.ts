import { z } from 'zod';
import { Interfaces } from '@/riotentity';
import { MiniSeriesSchema_v4 } from './MiniSeries';

export const LeagueEntrySchema_v4 = z.object({
    leagueId: z.string(),
    summonerId: z.string({ required_error: 'summonerId is required' })
        .max(63, { message: 'summonerId : Must be 63 characters long' })
        .nonempty({ message: 'summonerId is required' }),
    queueType: z.string(),
    tier: z.string(),
    rank: z.string(),
    leaguePoints: z.number().int().min(0),
    wins: z.number().int().min(0),
    losses: z.number().int().min(0),
    hotStreak: z.boolean(),
    veteran: z.boolean(),
    freshBlood: z.boolean(),
    inactive: z.boolean(),
    miniSeries: MiniSeriesSchema_v4.optional(),
}).strict() satisfies z.ZodType<Interfaces.ILeagueEntryDTO_v4>;


// miniSeries: z.object({
//     losses: z.number(),
//     wins: z.number(),
//     target: z.number(),
//     progress: z.string(),
//   }).optional()