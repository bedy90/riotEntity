
/**
 * Interface IPerksDTO
 * 
 * @namespace Match
 * @version v5
 * @name IPerksDTO
 */
export interface IPerksDTO {
    statPerks: IPerkStatsDTO;
    styles: IPerkStyleDTO[];
}

/**
 * Interface IPerkStatsDTO
 * 
 * @namespace Match
 * @version v5
 * @name IPerkStatsDTO
 */
export interface IPerkStatsDTO {
    defense: number;
    flex: number;
    offense: number;
}

/**
 * Interface IPerkStyleDTO
 * 
 * @namespace Match
 * @version v5
 * @name IPerkStyleDTO
 */
export interface IPerkStyleDTO {
    description: string;
    selections: IPerkStyleSelectionDTO[];
    style: number;
}

/**
 * Interface IPerkStyleSelectionDTO
 * 
 * @namespace Match
 * @version v5
 * @name IPerkStyleSelectionDTO
 */
export interface IPerkStyleSelectionDTO {
    perk: number;
    var1: number;
    var2: number;
    var3: number;
}
