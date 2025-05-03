import { z, SafeParseReturnType } from 'zod';

export class AccountValidator {

    static schema = z.object({
        puuid: z.string().length(78, { message: 'puuid : Must be 78 characters long' }),
        gameName: z.string().min(3, { message: 'gameName : Must be 3 or more characters long' }).max(16, { message: 'gameName : Must be 16 or fewer characters long' }),
        tagLine: z.string().min(3, { message: 'tagLine : Must be 3 or more characters long' }).max(5, { message: 'tagLine : Must be 5 or fewer characters long' }),
    });

    static validate(obj: any): SafeParseReturnType<any, any> {
        return AccountValidator.schema.safeParse(obj);
    }

}