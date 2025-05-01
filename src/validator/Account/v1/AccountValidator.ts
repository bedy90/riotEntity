import { z } from 'zod';

export class AccountValidator {

    static schema = z.object({
        puuid: z.string().length(78),
        gameName: z.string().min(3, { message: 'Must be 3 or more characters long' }).max(16, { message: 'Must be 16 or fewer characters long' }),
        tagLine: z.string().min(3, { message: 'Must be 3 or more characters long' }).max(5, { message: 'Must be 5 or fewer characters long' }),
    });

    static validate(obj: any) {
        return AccountValidator.schema.safeParse(obj);
    }

}