import { Interfaces } from '@/riotentity';

/**
 * Class LeagueListDTO
 *
 * @namespace TFT_League
 * @version v1
 * @name ILeagueListDTO
 */
export class LeagueListDTO implements Interfaces.TFT_League.v1.ILeagueListDTO {
    leagueId!: string;
    entries!: Interfaces.TFT_League.v1.ILeagueItemDTO[];
    tier!: string;
    name!: string;
    queue!: string;
}
