/**
 * Interface TFT - IUnitDTO
 *
 * @namespace TFT_Match
 * @version v1
 * @name IUnitDTO
 * @prefix TFT_
 * @strict
 */
export interface IUnitDTO_v1 {
    /**
     * A list of the unit's items. Please refer to the Teamfight Tactics documentation for item ids.
     */
    items: number[];

    /**
     * This field was introduced in patch 9.22 with data_version 2.
     */
    character_id: string;

    /**
     * If a unit is chosen as part of the Fates set mechanic, the chosen trait will be indicated by this field. Otherwise this field is excluded from the response.
     */
    chosen: string;

    /**
     * 	Unit name. This field is often left blank.
     */
    name: string;

    /**
     * Unit rarity. This doesn't equate to the unit cost.
     */
    rarity: number;

    /**
     * Unit tier.
     */
    tier: number;

}

