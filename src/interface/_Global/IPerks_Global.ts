/**
 * Interface IPerks_Global
 *
 * @namespace Global 
 * @version 1
 * @name IPerks_Global
 */
export interface IPerks_Global {
    /**
     * IDs of the perks/runes assigned.
     */
    perkIds: number[];

    /**
     * Primary runes path
     */
    perkStyle: number;

    /**
     * Secondary runes path
     */
    perkSubStyle: number;
}
