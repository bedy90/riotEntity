import { Interfaces } from '@/riotentity';

export class LeagueListDTO implements Interfaces.League.v4.ILeagueListDTO {
    leagueId!: string;
    entries!: Interfaces.League.v4.ILeagueItemDTO[];
    tier!: string;
    name!: string;
    queue!: string;

}

export class LeagueItemDTO implements Interfaces.League.v4.ILeagueItemDTO {
    freshBlood!: boolean;
    wins!: number;
    summonerName!: string;
    miniSeries!: Interfaces.League.v4.IMiniSeriesDTO;
    inactive!: boolean;
    veteran!: boolean;
    hotStreak!: boolean;
    rank!: string;
    leaguePoints!: number;
    losses!: number;
    summonerId!: string;

}

export class MiniSeriesDTO implements Interfaces.League.v4.IMiniSeriesDTO {
    losses!: number;
    progress!: string;
    target!: number;
    wins!: number;
}
