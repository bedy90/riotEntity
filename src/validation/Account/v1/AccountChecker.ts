import { Interfaces } from '@/riotentity';

export function isIAccountDTO(obj: any): obj is Interfaces.Account.v1.IAccountDTO {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }

    // Pourrait potentiellement pré-créer un objet et ensuite comparer les « keys »
    // let data: Interfaces.Account.v1.IAccountDTO = {gameName:'',puuid: '', tagLine: ''};
    // Object.keys(data)

    const accountDTO = obj as Interfaces.Account.v1.IAccountDTO;

    const hasFieldsIn: boolean = 'puuid' in accountDTO && 'gameName' in accountDTO && 'tagLine' in accountDTO;

    const hasFieldCount: boolean = Object.keys(accountDTO).length === 3;

    const hasFieldType: boolean = (
        typeof accountDTO.puuid === 'string' &&
        typeof accountDTO.gameName === 'string' &&
        typeof accountDTO.tagLine === 'string'
    );

    return hasFieldsIn && hasFieldCount && hasFieldType;
}