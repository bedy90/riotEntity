import { Interfaces } from '@/riotentity';

/**
 * Class Perks
 *
 * @namespace TFT_Spectactor
 * @version v5
 * @name IPerks
 */
export class Perks implements Interfaces.TFT_Spectactor.v5.IPerks {
    perkIds!: number[];
    perkStyle!: number;
    perkSubStyle!: number;
}
