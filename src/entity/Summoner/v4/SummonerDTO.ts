import { Interfaces } from '@/riotentity';

/**
 * Class SummonerDTO_v4
 *
 * @namespace Summoner
 * @version v4
 * @name ISummonerDTO
 */
export class SummonerDTO_v4 implements Interfaces.ISummonerDTO_v4 {
    accountId!: string;
    profileIconId!: number;
    revisionDate!: number;
    id!: string;
    puuid!: string;
    summonerLevel!: number;
}
