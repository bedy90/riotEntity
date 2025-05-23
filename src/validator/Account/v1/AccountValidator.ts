import { SafeParseReturnType } from 'zod';
import { Schemas } from '@/riotentity';

export class AccountValidator {

    // static AccountSchema = z.object({
    //     puuid: z.string({ required_error: 'puuid is required' })
    //         .length(78, { message: 'puuid : Must be 78 characters long' })
    //         .nonempty({ message: 'puuid is required' }),
    //     gameName: z.string({ required_error: 'gameName is required' })
    //         .min(3, { message: 'gameName : Must be 3 or more characters long' })
    //         .max(16, { message: 'gameName : Must be 16 or fewer characters long' })
    //         .nonempty({ message: 'gameName is required' }),
    //     tagLine: z.string({ required_error: 'tagLine is required' })
    //         .min(3, { message: 'tagLine : Must be 3 or more characters long' })
    //         .max(5, { message: 'tagLine : Must be 5 or fewer characters long' })
    //         .nonempty({ message: 'tagLine is required' }),
    // })
    //     // .strict() : All property is mandatory
    //     // satisfies : validate interface type
    //     .strict() satisfies z.ZodType<Interfaces.IAccountDTO>;

    static validate(obj: any): SafeParseReturnType<any, any> {
        // return AccountValidator.AccountSchema.safeParse(obj);
        return Schemas.AccountSchema.AccountSchema_v1.safeParse(obj);
    }

}
