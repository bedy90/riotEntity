import { Interfaces } from '@/index';

export namespace Account {
    export class AccountDTO implements Interfaces.Account.v1.IAccountDTO {
        puuid!: string;
        gameName!: string;
        tagLine!: string;
    }
}