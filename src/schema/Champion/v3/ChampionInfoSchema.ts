import { z } from 'zod';
import { Interfaces } from '../../../index.js';

export const ChampionInfoSchema_v3 = z.object({
    maxNewPlayerLevel: z.number().int(),
    freeChampionIdsForNewPlayers: z.array(z.number().int()),
    freeChampionIds: z.array(z.number().int()),
})
.strict() satisfies z.ZodType<Interfaces.IChampionInfo_v3>;

// Typage TypeScript généré à partir du schéma Zod (optionnel)
// export type IChampionInfo_v3 = z.infer<typeof ChampionInfoV3Schema>;