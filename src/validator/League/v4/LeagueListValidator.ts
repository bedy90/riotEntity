import { SafeParseReturnType } from 'zod';
import { Schemas } from '../../../index.js';

/**
 * Class LeagueListValidator
 *
 * @namespace League
 * @version v4
 * @name LeagueListValidator
 */
export class LeagueListValidator {

    static validate(obj: any): SafeParseReturnType<any, any> {
        return Schemas.LeagueSchema.LeagueListSchema_v4.safeParse(obj);
    }

}
