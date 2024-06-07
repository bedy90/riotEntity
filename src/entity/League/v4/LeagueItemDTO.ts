import { Interfaces } from '@/riotentity';

export class LeagueItemDTO implements Interfaces.League.v4.ILeagueItemDTO {
    freshBlood!: boolean;
    wins!: number;
    miniSeries!: Interfaces.League.v4.IMiniSeriesDTO;
    inactive!: boolean;
    veteran!: boolean;
    hotStreak!: boolean;
    rank!: string;
    leaguePoints!: number;
    losses!: number;
    summonerId!: string;
}

