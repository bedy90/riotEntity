import { SafeParseReturnType } from 'zod';
import { Schemas } from '../../../index.js';

/**
 * Class SummonerDTO_v1
 *
 * @namespace TFT_Summoner
 * @version v1
 * @name TFT_SummonerValidator
 * @prefix TFT_
 */
export class TFT_SummonerValidator {

	static validate(obj: any): SafeParseReturnType<any, any> {
		return Schemas.TFT_SummonerSchema.SummonerSchema_v1.safeParse(obj);
	}

}