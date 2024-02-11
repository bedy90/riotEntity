import { Interfaces } from '@/riotentity';

export function isIAccountDTO(obj: any): obj is Interfaces.Account.v1.IAccountDTO {
    const hasFields = 'puuid' in obj && 'gameName' in obj && 'tagLine' in obj && Object.keys(obj).length === 3;
    return hasFields;
}
