import { Interfaces } from '@/riotentity';

export class ApexPlayerInfoDTO implements Interfaces.LoL_Challenges.v1.IApexPlayerInfoDTO {
    puuid!: string;
    value!: number;
    position!: number;

}
