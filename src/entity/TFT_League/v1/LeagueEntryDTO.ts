import { Interfaces } from '@/riotentity';
import { IMiniSeriesDTO_Global } from '@/interface/_Global/IMiniSeriesDTO_Global';

/**
 * Class LeagueEntryDTO_v1
 *
 * @namespace TFT_League
 * @version v1
 * @name ILeagueEntryDTO
 */
export class LeagueEntryDTO_v1 implements Interfaces.TFT_ILeagueEntryDTO_v1 {
    puuid!: string;
    ratedTier!: string;
    ratedRating!: string;
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
