import { Interfaces } from '@/index';

export function isIAccountDTO(obj: any): obj is Interfaces.Account.v1.IAccountDTO {
    return (
        'puuid' in obj &&
        'gameName' in obj &&
        'tagLine' in obj
    );
}
