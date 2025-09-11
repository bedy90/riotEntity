import { ZodSafeParseResult } from 'zod';
import { Schemas } from '../../../index.js';

/**
 * Class MiniSeriesValidator
 *
 * @namespace League
 * @version v4
 * @name MiniSeriesValidator
 */
export class MiniSeriesValidator {

	static validate(obj: any): ZodSafeParseResult<any> {
		return Schemas.LeagueSchema.MiniSeriesSchema_v4.safeParse(obj);
	}

}
