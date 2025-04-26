import { Interfaces } from '@/riotentity';
import { TraitStyle } from '@/riotentity';

/**
 * Class TraitDTO_v1
 *
 * @namespace TFT_Match
 * @version v1
 * @name ITraitDTO
 */
export class TraitDTO_v1 implements Interfaces.TFT_ITraitDTO_v1 {
    name!: string;
    num_units!: number;
    style!: TraitStyle | number;
    tier_current!: number;
    tier_total!: number;
}
