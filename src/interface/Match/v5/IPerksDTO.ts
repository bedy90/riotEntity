export interface IPerksDTO {
    statPerks: IPerkStatsDTO;
    styles: IPerkStyleDTO[];
}

export interface IPerkStatsDTO {
    defense: number;
    flex: number;
    offense: number;
}

export interface IPerkStyleDTO {
    description: string;
    selections: IPerkStyleSelectionDTO[];
    style: number;
}

export interface IPerkStyleSelectionDTO {
    perk: number;
    var1: number;
    var2: number;
    var3: number;
}
