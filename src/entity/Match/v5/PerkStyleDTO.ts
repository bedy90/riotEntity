import { Interfaces } from '@/riotentity';

/**
 * Class PerkStyleDTO
 *
 * @namespace Match
 * @version v5
 * @name IPerkStyleDTO
 */
export class PerkStyleDTO implements Interfaces.Match.v5.IPerkStyleDTO {
    description!: string;
    selections!: Interfaces.Match.v5.IPerkStyleSelectionDTO[];
    style!: number;
}
