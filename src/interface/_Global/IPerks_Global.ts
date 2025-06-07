/**
 * Interface IPerks_Global
 *
 * @namespace Global
 * @version v1
 * @name IPerks_Global
 */
export interface IPerks_Global {
    /**
     * IDs of the perks/runes assigned.
     */
    perkIds: bigint[];

    /**
     * Primary runes path
     */
    perkStyle: bigint;

    /**
     * Secondary runes path
     */
    perkSubStyle: bigint;
}
