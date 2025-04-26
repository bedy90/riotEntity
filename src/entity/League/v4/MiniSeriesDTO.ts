import { Interfaces } from '@/riotentity';

/**
 * Class MiniSeriesDTO_v4
 *
 * @namespace League
 * @version v4
 * @name IMiniSeriesDTO
 */
export class MiniSeriesDTO_v4 implements Interfaces.IMiniSeriesDTO_v4 {
    losses!: number;
    progress!: string;
    target!: number;
    wins!: number;
}
