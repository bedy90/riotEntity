import { Interfaces } from '@/riotentity';

/**
 * Class LeagueItemDTO
 *
 * @namespace League
 * @version v4
 * @name ILeagueItemDTO
 */
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
