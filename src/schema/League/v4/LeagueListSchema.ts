import { z } from 'zod';
import { Interfaces } from '../../../index.js';
import { LeagueItemSchema_v4 } from './LeagueItemSchema';

export const LeagueListSchema_v4 = z.object({
    leagueId: z.string(),
    entries: z.array(LeagueItemSchema_v4),
    tier: z.string(),
    name: z.string(),
    queue: z.string(),
}).strict() satisfies z.ZodType<Interfaces.ILeagueListDTO_v4>;
