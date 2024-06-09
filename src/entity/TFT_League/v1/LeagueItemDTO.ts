import { Interfaces } from '@/riotentity';

/**
 * Class LeagueItemDTO
 *
 * @namespace TFT_League
 * @version v1
 * @name ILeagueItemDTO
 */
export class LeagueItemDTO implements Interfaces.TFT_League.v1.ILeagueItemDTO {
    freshBlood!: boolean;
    wins!: number;
    miniSeries!: Interfaces.TFT_League.v1.IMiniSeriesDTO;
    inactive!: boolean;
    veteran!: boolean;
    hotStreak!: boolean;
    rank!: string;
    leaguePoints!: number;
    losses!: number;
    summonerId!: string;
}
