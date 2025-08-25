import { Interfaces } from '../../../index.js';

/**
 * Interface IPerkStyleDTO
 *
 * @namespace Match
 * @version v5
 * @name IPerkStyleDTO
 * @strict
 */
export interface IPerkStyleDTO_v5 {
    description: string;

    selections: Interfaces.IPerkStyleSelectionDTO_v5[];

    style: number;
}
