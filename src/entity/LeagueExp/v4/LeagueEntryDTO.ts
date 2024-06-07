import { Interfaces } from '@/riotentity';
import { IMiniSeriesDTO_Global } from '@/src/interface/_Global/IMiniSeriesDTO_global';

export class LeagueEntryDTO implements Interfaces.LeagueExp.v4.ILeagueEntryDTO {
    leagueId!: string;
    summonerId!: string;
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
    miniSeries!: IMiniSeriesDTO_Global;
}
