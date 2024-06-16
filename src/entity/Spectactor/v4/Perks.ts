import { Interfaces } from '@/riotentity';

/**
 * Class Perks
 *
 * @namespace Spectactor
 * @version v4
 * @name IPerks
 */
export class Perks implements Interfaces.Spectactor.v4.IPerks {
    perkIds!: number[];
    perkStyle!: number;
    perkSubStyle!: number;
}
