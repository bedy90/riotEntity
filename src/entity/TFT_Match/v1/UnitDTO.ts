import { Interfaces } from '@/riotentity';

export class UnitDTO implements Interfaces.TFT_Match.v1.IUnitDTO {
    items!: number[];
    character_id!: string;
    chosen!: string;
    name!: string;
    rarity!: number;
    tier!: number;
}
