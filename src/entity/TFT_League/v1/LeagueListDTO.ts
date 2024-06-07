import { Interfaces } from '@/riotentity';

export class LeagueListDTO implements Interfaces.TFT_League.v1.ILeagueListDTO {
    leagueId!: string;
    entries!: Interfaces.TFT_League.v1.ILeagueItemDTO[];
    tier!: string;
    name!: string;
    queue!: string;
}
