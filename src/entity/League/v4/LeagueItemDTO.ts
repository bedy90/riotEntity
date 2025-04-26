import { Interfaces } from '@/riotentity';

/**
 * Class LeagueItemDTO_v4
 *
 * @namespace League
 * @version v4
 * @name ILeagueItemDTO
 */
export class LeagueItemDTO_v4 implements Interfaces.ILeagueItemDTO_v4 {
    freshBlood!: boolean;
    wins!: number;
    miniSeries!: Interfaces.IMiniSeriesDTO_v4;
    inactive!: boolean;
    veteran!: boolean;
    hotStreak!: boolean;
    rank!: string;
    leaguePoints!: number;
    losses!: number;
    summonerId!: string;
}
