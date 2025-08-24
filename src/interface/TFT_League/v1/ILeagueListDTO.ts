import { Interfaces } from '../../../index.js';

/**
 * Interface TFT - ILeagueListDTO
 *
 * @namespace TFT_League
 * @version v1
 * @name ILeagueListDTO
 * @prefix TFT_
 * @strict
 */
export interface ILeagueListDTO_v1 {
    leagueId: string;

    entries: Interfaces.ITFT_LeagueItemDTO_v1[];

    tier: string;

    name: string;

    queue: string;
}
