import { z, SafeParseReturnType } from 'zod';
import { Interfaces } from '@/riotentity';
import { MiniSeriesValidator } from '../v4/MiniSeriesValidator';

/**
 * Class LeagueEntryValidator
 *
 * @namespace League
 * @version v4
 * @name ILeagueEntryDTO
 * @prefix null
 */
export class LeagueEntryValidator {

	static leagueEntrySchema = z.object({
		leagueId: z.string(),
		summonerId: z.string({ required_error: 'id is required' })
			.max(63, { message: 'id : Must be 63 characters long' })
			.nonempty({ message: 'id is required' }),
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
		miniSeries: MiniSeriesValidator.miniSeriesSchema.optional(),
	}).strict() satisfies z.ZodType<Interfaces.ILeagueEntryDTO_v4>;

	static validate(obj: any): SafeParseReturnType<any, any> {
		return this.leagueEntrySchema.safeParse(obj);
	}

}
