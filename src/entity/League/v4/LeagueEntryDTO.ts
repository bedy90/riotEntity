import { Interfaces } from '@/riotentity';
import { IMiniSeriesDTO_Global } from '@/interface/_Global/IMiniSeriesDTO_Global';

/**
 * Class LeagueEntryDTO_v4
 *
 * @namespace League
 * @version v4
 * @name ILeagueEntryDTO
 */
export class LeagueEntryDTO_v4 implements Interfaces.ILeagueEntryDTO_v4 {
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
