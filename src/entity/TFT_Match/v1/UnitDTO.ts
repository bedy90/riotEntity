import { Interfaces } from '@/riotentity';

/**
 * Class UnitDTO_v1
 *
 * @namespace TFT_Match
 * @version v1
 * @name IUnitDTO
 */
export class UnitDTO_v1 implements Interfaces.TFT_IUnitDTO_v1 {
    items!: number[];
    character_id!: string;
    chosen!: string;
    name!: string;
    rarity!: number;
    tier!: number;
}
