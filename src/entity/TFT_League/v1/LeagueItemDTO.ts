import { Interfaces } from '@/riotentity';

/**
 * Class LeagueItemDTO_v1
 *
 * @namespace TFT_League
 * @version v1
 * @name ILeagueItemDTO
 */
export class LeagueItemDTO_v1 implements Interfaces.TFT_ILeagueItemDTO_v1 {
    freshBlood!: boolean;
    wins!: number;
    miniSeries!: Interfaces.TFT_IMiniSeriesDTO_v1;
    inactive!: boolean;
    veteran!: boolean;
    hotStreak!: boolean;
    rank!: string;
    leaguePoints!: number;
    losses!: number;
    summonerId!: string;
}
