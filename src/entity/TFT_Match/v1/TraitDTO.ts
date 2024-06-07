import { Interfaces } from '@/riotentity';
import { TraitStyle } from '@/riotentity';

export class TraitDTO implements Interfaces.TFT_Match.v1.ITraitDTO {
    name!: string;
    num_units!: number;
    style!: TraitStyle | number;
    tier_current!: number;
    tier_total!: number;
}
