import { TraitStyle } from '@/riotentity';

/**
 * Interface TFT - ITraitDTO
 *
 * @namespace TFT_Match
 * @version v1
 * @name ITraitDTO
 */
export interface ITraitDTO_v1 {
    /**
     * 	Trait name.
     */
    name: string;

    /**
     * Number of units with this trait.
     */
    num_units: number;

    /**
     * 	Current style for this trait. (0 = No style, 1 = Bronze, 2 = Silver, 3 = Gold, 4 = Chromatic)
     */
    style: TraitStyle | number;
    /**
     * 	Current active tier for the trait.
     */
    tier_current: number;
    /**
     * Total tiers for the trait.
     */
    tier_total: number;

}
