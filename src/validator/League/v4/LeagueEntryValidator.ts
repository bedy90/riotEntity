import { SafeParseReturnType } from 'zod';
import { Schemas } from '@/riotentity';
// import { MiniSeriesValidator } from '../v4/MiniSeriesValidator';

/**
 * Class LeagueEntryValidator
 *
 * @namespace League
 * @version v4
 * @name ILeagueEntryDTO
 * @prefix null
 */
export class LeagueEntryValidator {

	// static leagueEntrySchema = z.object({
	// 	leagueId: z.string(),
	// 	summonerId: z.string({ required_error: 'summonerId is required' })
	// 		.max(63, { message: 'summonerId : Must be 63 characters long' })
	// 		.nonempty({ message: 'summonerId is required' }),
	// 	queueType: z.string(),
	// 	tier: z.string(),
	// 	rank: z.string(),
	// 	leaguePoints: z.number().int().min(0),
	// 	wins: z.number().int().min(0),
	// 	losses: z.number().int().min(0),
	// 	hotStreak: z.boolean(),
	// 	veteran: z.boolean(),
	// 	freshBlood: z.boolean(),
	// 	inactive: z.boolean(),
	// 	miniSeries: MiniSeriesValidator.miniSeriesSchema.optional(),
	// }).strict() satisfies z.ZodType<Interfaces.ILeagueEntryDTO_v4>;

	// static validate(obj: any): SafeParseReturnType<any, any> {
	// 	return this.leagueEntrySchema.safeParse(obj);
	// }

	static validate(obj: any): SafeParseReturnType<any, any> {
		// return this.SummonerSchema.safeParse(obj);
		return Schemas.LeagueEntrySchema.LeagueEntrySchema_v4.safeParse(obj);
	}

}
