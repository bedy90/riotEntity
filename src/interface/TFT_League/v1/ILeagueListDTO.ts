import { Interfaces } from '@/riotentity';

/**
 * Interface TFT - ILeagueListDTO
 *
 * @namespace TFT_League
 * @version v1
 * @name ILeagueListDTO
 */
export interface ILeagueListDTO_v1 {
    leagueId: string;

    entries: Interfaces.TFT_ILeagueItemDTO_v1[];

    tier: string;

    name: string;

    queue: string;
}
