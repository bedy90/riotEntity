import { Interfaces } from '@/riotentity';

/**
 * Class SummonerDTO_v1
 *
 * @namespace TFT_Summoner
 * @version v1
 * @name ISummonerDTO
 */
export class SummonerDTO_v1 implements Interfaces.TFT_ISummonerDTO_v1 {
    accountId!: string;
    profileIconId!: number;
    revisionDate!: number;
    id!: string;
    puuid!: string;
    summonerLevel!: number;
}
