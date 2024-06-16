import { Interfaces } from '@/riotentity';
import { IMiniSeriesDTO_Global } from '@/src/interface/_Global/IMiniSeriesDTO_Global';

/**
 * Class LeagueEntryDTO
 *
 * @namespace TFT_League
 * @version v1
 * @name ILeagueEntryDTO
 */
export class LeagueEntryDTO implements Interfaces.TFT_League.v1.ILeagueEntryDTO {
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
