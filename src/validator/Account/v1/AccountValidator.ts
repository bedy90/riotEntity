import { ZodSafeParseResult } from 'zod';
import { Schemas } from '../../../index.js';

export class AccountValidator {

    static validate(obj: any): ZodSafeParseResult<any> {
        // return AccountValidator.AccountSchema.safeParse(obj);
        return Schemas.AccountSchema.AccountSchema_v1.safeParse(obj);
    }

}
