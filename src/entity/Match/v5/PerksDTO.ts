import { Interfaces } from '@/riotentity';

export class PerksDTO implements Interfaces.Match.v5.IPerksDTO {
    statPerks!: Interfaces.Match.v5.IPerkStatsDTO;
    styles!: Interfaces.Match.v5.IPerkStyleDTO[];
}
