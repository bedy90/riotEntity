import { Interfaces } from '@/riotentity';

export class Perks implements Interfaces.TFT_Spectactor.v5.IPerks {
    perkIds!: number[];
    perkStyle!: number;
    perkSubStyle!: number;
}
