import { z } from 'zod';
import { Interfaces } from '../../../index.js';

export const MiniSeriesSchema_v4 = z.object({
    losses: z.number().int().min(0),
    target: z.number().int().min(0),
    wins: z.number().int().min(0),
    progress: z.string(),
}).strict() satisfies z.ZodType<Interfaces.IMiniSeriesDTO_v4>;