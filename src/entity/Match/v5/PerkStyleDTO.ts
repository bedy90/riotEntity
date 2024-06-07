import { Interfaces } from '@/riotentity';

export class PerkStyleDTO implements Interfaces.Match.v5.IPerkStyleDTO {
    description!: string;
    selections!: Interfaces.Match.v5.IPerkStyleSelectionDTO[];
    style!: number;
}
