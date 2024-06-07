import { Interfaces } from '@/riotentity';

export class MiniSeriesDTO implements Interfaces.LeagueExp.v4.IMiniSeriesDTO {
    losses!: number;
    progress!: string;
    target!: number;
    wins!: number;
}
