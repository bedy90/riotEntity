import { Interfaces } from '@/riotentity';

/**
 * Interface TFT - ILeagueListDTO
 *
 * @namespace TFT_League
 * @version v1
 * @name ILeagueListDTO
 */
export interface ILeagueListDTO {
    leagueId: string;

    entries: Interfaces.TFT_League.v1.ILeagueItemDTO[];

    tier: string;

    name: string;

    queue: string;
}
