import { Interfaces } from '@/riotentity';

/**
 * Interface IPerkStyleDTO
 *
 * @namespace Match
 * @version v5
 * @name IPerkStyleDTO
 */
export interface IPerkStyleDTO {
    description: string;
    selections: Interfaces.Match.v5.IPerkStyleSelectionDTO[];
    style: number;
}
