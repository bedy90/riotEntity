import { z } from 'zod';
import { Interfaces } from '../../../index.js';
// À adapter selon l'import réel de IMiniSeriesDTO_v4
import { MiniSeriesSchema_v4 } from './MiniSeriesSchema';

export const LeagueItemSchema_v4 = z.object({
  freshBlood: z.boolean(),
  wins: z.number(),
  miniSeries: MiniSeriesSchema_v4.optional(), // À définir selon ton interface
  inactive: z.boolean(),
  veteran: z.boolean(),
  hotStreak: z.boolean(),
  rank: z.string(),
  leaguePoints: z.number(),
  losses: z.number(),
  summonerId: z.string({ required_error: 'summonerId is required' })
        .max(63, { message: 'summonerId : Must be 63 characters long' })
        .nonempty({ message: 'summonerId is required' }),
  puuid: z.string({ required_error: 'puuid is required' })
  .length(78, { message: 'puuid : Must be 78 characters long' })
  .nonempty({ message: 'puuid is required' }),
}).strict() satisfies z.ZodType<Interfaces.ILeagueItemDTO_v4>;
