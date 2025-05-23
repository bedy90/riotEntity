import { SafeParseReturnType } from 'zod';
import { Schemas } from '@/riotentity';

/**
 * Class MiniSeriesValidator
 *
 * @namespace League
 * @version v4
 * @name MiniSeriesValidator
 */
export class MiniSeriesValidator {

	// static miniSeriesSchema = z.object({
    //     losses: z.number().int().min(0),
	// 	target: z.number().int().min(0),
	// 	wins: z.number().int().min(0),
    //     progress: z.string(),
    // }).strict() satisfies z.ZodType<Interfaces.IMiniSeriesDTO_v4>;

	static validate(obj: any): SafeParseReturnType<any, any> {
		// return this.miniSeriesSchema.safeParse(obj);
		return Schemas.MiniSeriesSchema.MiniSeriesSchema_v4.safeParse(obj);
	}

}
