import { Interfaces } from '@/riotentity';

/**
 * Class MiniSeriesDTO
 *
 * @namespace TFT_League
 * @version v1
 * @name IMiniSeriesDTO
 */
export class MiniSeriesDTO implements Interfaces.TFT_League.v1.IMiniSeriesDTO {
    losses!: number;
    progress!: string;
    target!: number;
    wins!: number;
}
