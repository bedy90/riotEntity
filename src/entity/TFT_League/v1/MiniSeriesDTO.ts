import { Interfaces } from '@/riotentity';

/**
 * Class MiniSeriesDTO_v1
 *
 * @namespace TFT_League
 * @version v1
 * @name IMiniSeriesDTO
 */
export class MiniSeriesDTO_v1 implements Interfaces.TFT_IMiniSeriesDTO_v1 {
    losses!: number;
    progress!: string;
    target!: number;
    wins!: number;
}
