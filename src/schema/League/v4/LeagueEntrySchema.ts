import { z } from 'zod';
import { Interfaces } from '../../../index.js';
import { MiniSeriesSchema_v4 } from './MiniSeriesSchema.js';

export const LeagueEntrySchema_v4 = z.object({
    leagueId: z.string(),
    summonerId: z.string({ error: (issue) => issue.input === undefined ? 'summonerId is required' : 'not a string' })
        .max(63, { message: 'summonerId : Must be 63 characters long' })
        .nonempty({ message: 'summonerId is required' }).optional(),
    puuid: z.string({ error: (issue) => issue.input === undefined ? 'puuid is required' : 'not a string' })
        .length(78, { message: 'puuid : Must be 78 characters long' })
        .nonempty({ message: 'puuid is required' }),
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
