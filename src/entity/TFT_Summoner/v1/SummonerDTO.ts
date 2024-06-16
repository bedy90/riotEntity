import { Interfaces } from '@/riotentity';

/**
 * Class SummonerDTO
 *
 * @namespace TFT_Summoner
 * @version v1
 * @name ISummonerDTO
 */
export class SummonerDTO implements Interfaces.TFT_Summoner.v1.ISummonerDTO {
    accountId!: string;
    profileIconId!: number;
    revisionDate!: number;
    id!: string;
    puuid!: string;
    summonerLevel!: number;
}
