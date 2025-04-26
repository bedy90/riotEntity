import { Interfaces } from '@/riotentity';

/**
 * Class AccountDTO_v1
 *
 * @namespace Account
 * @version v1
 * @name IAccountDTO
 */
export class AccountDTO_v1 implements Interfaces.IAccountDTO_v1 {
    puuid!: string;
    gameName!: string;
    tagLine!: string;
}
