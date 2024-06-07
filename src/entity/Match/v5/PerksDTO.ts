/* eslint-disable max-len */
/* eslint-disable no-shadow */
import { Interfaces } from '@/riotentity';

export class PerksDTO implements Interfaces.Match.v5.IPerksDTO {
    statPerks!: Interfaces.Match.v5.IPerkStatsDTO;
    styles!: Interfaces.Match.v5.IPerkStyleDTO[];
}

export class PerkStatsDTO implements Interfaces.Match.v5.IPerkStatsDTO {
    defense!: number;
    flex!: number;
    offense!: number;
}

export class PerkStyleDTO implements Interfaces.Match.v5.IPerkStyleDTO {
    description!: string;
    selections!: Interfaces.Match.v5.IPerkStyleSelectionDTO[];
    style!: number;
}

export class PerkStyleSelectionDTO implements Interfaces.Match.v5.IPerkStyleSelectionDTO {
    perk!: number;
    var1!: number;
    var2!: number;
    var3!: number;
}
