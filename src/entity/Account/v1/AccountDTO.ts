import { Interfaces } from '@/riotentity';

/**
 * Class AccountDTO
 *
 * @namespace Account
 * @version v1
 * @name IAccountDTO
 */
export class AccountDTO implements Interfaces.Account.v1.IAccountDTO {
    puuid!: string;
    gameName!: string;
    tagLine!: string;
}
