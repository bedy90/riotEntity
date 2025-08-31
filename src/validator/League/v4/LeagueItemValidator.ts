import { SafeParseReturnType } from 'zod';
import { Schemas } from '../../../index.js';

/**
 * Class LeagueItemValidator
 *
 * @namespace League
 * @version v4
 * @name LeagueItemValidator
 */
export class LeagueItemValidator {

    static validate(obj: any): SafeParseReturnType<any, any> {
        return Schemas.LeagueSchema.LeagueItemSchema_v4.safeParse(obj);
    }

}
