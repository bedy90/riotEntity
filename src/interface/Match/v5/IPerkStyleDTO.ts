import { Interfaces } from '@/riotentity';

/**
 * Interface IPerkStyleDTO
 *
 * @namespace Match
 * @version v5
 * @name IPerkStyleDTO
 */
export interface IPerkStyleDTO_v5 {
    description: string;

    selections: Interfaces.IPerkStyleSelectionDTO_v5[];

    style: number;
}
