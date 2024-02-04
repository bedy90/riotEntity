import { Interfaces } from '@/index';

export class LeagueEntryDTO implements Interfaces.League.v4.ILeagueEntryDTO {
    leagueId!: string;
    summonerId!: string;
    summonerName!: string;
    queueType!: string;
    tier!: string;
    rank!: string;
    leaguePoints!: number;
    wins!: number;
    losses!: number;
    hotStreak!: boolean;
    veteran!: boolean;
    freshBlood!: boolean;
    inactive!: boolean;
    miniSeries!: Interfaces.League.v4.IMiniSeriesDTO;
}
