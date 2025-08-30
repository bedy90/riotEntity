import { SafeParseReturnType } from 'zod';
import { Schemas } from '../../../index.js';

/**
 * Class SummonerDTO_v4
 *
 * @namespace Summoner
 * @version v4
 * @name SummonerValidator
 * @prefix null
 */
export class SummonerValidator {

	static validate(obj: any): SafeParseReturnType<any, any> {
		// return this.SummonerSchema.safeParse(obj);
		return Schemas.SummonerSchema.SummonerSchema_v4.safeParse(obj);
	}

}

