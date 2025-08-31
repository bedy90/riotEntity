import { z } from 'zod';
import { Interfaces } from '../../../index.js';

export const AccountSchema_v1 = z.object({
    puuid: z.string({ required_error: 'puuid is required' })
        .length(78, { message: 'puuid : Must be 78 characters long' })
        .nonempty({ message: 'puuid is required' }),
    gameName: z.string({ required_error: 'gameName is required' })
        .min(3, { message: 'gameName : Must be 3 or more characters long' })
        .max(16, { message: 'gameName : Must be 16 or fewer characters long' })
        .nonempty({ message: 'gameName is required' }).optional(),
    tagLine: z.string({ required_error: 'tagLine is required' })
        .min(3, { message: 'tagLine : Must be 3 or more characters long' })
        .max(5, { message: 'tagLine : Must be 5 or fewer characters long' })
        .nonempty({ message: 'tagLine is required' }).optional(),
    })
    // .strict() : All property is mandatory
    // satisfies : validate interface type
    .strict() satisfies z.ZodType<Interfaces.IAccountDTO>;