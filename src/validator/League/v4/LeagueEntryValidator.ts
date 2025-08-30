import { SafeParseReturnType } from 'zod';
import { Schemas } from '../../../index.js';

/**
 * Class LeagueEntryValidator
 *
 * @namespace League
 * @version v4
 * @name ILeagueEntryDTO
 * @prefix null
 */
export class LeagueEntryValidator {


	static validate(obj: any): SafeParseReturnType<any, any> {
		// return this.SummonerSchema.safeParse(obj);
		return Schemas.LeagueEntrySchema.LeagueEntrySchema_v4.safeParse(obj);
	}

}
