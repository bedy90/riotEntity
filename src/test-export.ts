import { Interfaces, IAccountDTO, IAccountDTO_v1 } from '@/riotentity';

const interfaceByInterface: Interfaces.IAccountDTO = {
    gameName: 'gameName',
    puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg',
    tagLine: 'tag',
};

const byDTO: IAccountDTO = {
    gameName: 'gameName',
    puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg',
    tagLine: 'tag',
};

const byVersioNDTO: IAccountDTO_v1 = {
    gameName: 'gameName',
    puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg',
    tagLine: 'tag',
};


console.log(interfaceByInterface);
console.log(byDTO);
console.log(byVersioNDTO);
