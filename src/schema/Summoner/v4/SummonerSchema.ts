import { z } from 'zod';
import { Interfaces } from '../../../index.js';

export const SummonerSchema_v4 = z.object({
    profileIconId: z.number().int().min(0),
    revisionDate: z.bigint().min(BigInt(0)).optional(),
    puuid: z.string({ required_error: 'puuid is required' })
        .length(78, { message: 'puuid : Must be 78 characters long' })
        .nonempty({ message: 'puuid is required' }),
    summonerLevel: z.bigint().min(BigInt(1)),
}).strict() satisfies z.ZodType<Interfaces.ISummonerDTO>;