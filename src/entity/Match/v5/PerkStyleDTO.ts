import { Interfaces } from '@/riotentity';

/**
 * Class PerkStyleDTO_v5
 *
 * @namespace Match
 * @version v5
 * @name IPerkStyleDTO
 */
export class PerkStyleDTO_v5 implements Interfaces.IPerkStyleDTO_v5 {
    description!: string;
    selections!: Interfaces.IPerkStyleSelectionDTO_v5[];
    style!: number;
}
