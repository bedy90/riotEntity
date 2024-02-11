import { Interfaces } from '@/riotentity';

export class ApexPlayerInfoDTO implements Interfaces.Challenges.v1.IApexPlayerInfoDTO {
    puuid!: string;
    value!: number;
    position!: number;

}
