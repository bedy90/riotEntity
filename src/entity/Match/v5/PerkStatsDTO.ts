import { Interfaces } from '@/riotentity';

export class PerkStatsDTO implements Interfaces.Match.v5.IPerkStatsDTO {
    defense!: number;
    flex!: number;
    offense!: number;
}
