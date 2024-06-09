import { Interfaces } from '@/riotentity';

/**
 * Class MiniSeriesDTO
 *
 * @namespace LeagueExp
 * @version v4
 * @name IMiniSeriesDTO
 */
export class MiniSeriesDTO implements Interfaces.LeagueExp.v4.IMiniSeriesDTO {
    losses!: number;
    progress!: string;
    target!: number;
    wins!: number;
}
