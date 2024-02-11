import { Interfaces } from '@/riotentity';

export class AccountDTO implements Interfaces.Account.v1.IAccountDTO {
    puuid!: string;
    gameName!: string;
    tagLine!: string;
}