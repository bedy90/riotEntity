import { Interfaces } from '@/riotentity';

export class MiniSeriesDTO implements Interfaces.League.v4.IMiniSeriesDTO {
    losses!: number;
    progress!: string;
    target!: number;
    wins!: number;
}
