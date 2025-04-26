import { Interfaces } from '@/riotentity';

/**
 * Class CompanionDTO_v1
 *
 * @namespace TFT_Match
 * @version v1
 * @name ICompanionDTO
 */
export class CompanionDTO_v1 implements Interfaces.TFT_ICompanionDTO_v1 {
    content_ID!: string;
    item_ID!: number;
    skin_ID!: number;
    species!: string;
}
