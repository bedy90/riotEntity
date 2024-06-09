import { Interfaces } from '@/riotentity';

/**
 * Class MiniSeriesDTO
 *
 * @namespace League
 * @version v4
 * @name IMiniSeriesDTO
 */
export class MiniSeriesDTO implements Interfaces.League.v4.IMiniSeriesDTO {
    losses!: number;
    progress!: string;
    target!: number;
    wins!: number;
}
