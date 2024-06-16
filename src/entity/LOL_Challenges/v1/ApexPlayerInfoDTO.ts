import { Interfaces } from '@/riotentity';

/**
 * Class ApexPlayerInfoDTO
 *
 * @namespace LoL_Challenges
 * @version v1
 * @name IApexPlayerInfoDTO
 */
export class ApexPlayerInfoDTO implements Interfaces.LoL_Challenges.v1.IApexPlayerInfoDTO {
    puuid!: string;
    value!: number;
    position!: number;
}
