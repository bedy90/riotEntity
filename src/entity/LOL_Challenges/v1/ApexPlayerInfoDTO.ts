import { Interfaces } from '@/riotentity';

/**
 * Class ApexPlayerInfoDTO_v1
 *
 * @namespace LoL_Challenges
 * @version v1
 * @name IApexPlayerInfoDTO
 */
export class ApexPlayerInfoDTO_v1 implements Interfaces.IApexPlayerInfoDTO_v1 {
    puuid!: string;
    value!: number;
    position!: number;
}
