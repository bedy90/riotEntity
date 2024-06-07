import { Interfaces } from '@/riotentity';

export class MiniSeriesDTO implements Interfaces.TFT_League.v1.IMiniSeriesDTO {
    losses!: number;
    progress!: string;
    target!: number;
    wins!: number;
}
