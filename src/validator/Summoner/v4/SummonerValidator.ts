import { SafeParseReturnType } from 'zod';
import { Schemas } from '@/riotentity';

/**
 * Class SummonerDTO_v4
 *
 * @namespace Summoner
 * @version v4
 * @name SummonerValidator
 * @prefix null
 */
export class SummonerValidator {

	// static SummonerSchema = z.object({
	// 	accountId: z.string({ required_error: 'accountId is required' })
	// 		.max(56, { message: 'accountId : Must be 56 characters long' })
	// 		.nonempty({ message: 'accountId is required' }),
	// 	profileIconId: z.number().int().min(0),
	// 	revisionDate: z.number().int().min(0).optional(),
	// 	id: z.string({ required_error: 'id is required' })
	// 		.max(63, { message: 'id : Must be 63 characters long' })
	// 		.nonempty({ message: 'id is required' }),
	// 	puuid: z.string({ required_error: 'puuid is required' })
	// 		.length(78, { message: 'puuid : Must be 78 characters long' })
	// 		.nonempty({ message: 'puuid is required' }),
	// 	summonerLevel: z.number().int().min(1),
	// }).strict() satisfies z.ZodType<Interfaces.ISummonerDTO>;

	static validate(obj: any): SafeParseReturnType<any, any> {
		// return this.SummonerSchema.safeParse(obj);
		return Schemas.SummonerSchema.SummonerSchema_v4.safeParse(obj);
	}

}

