import { Interfaces } from '@/riotentity';

/**
 * Class SummonerDTO
 *
 * @namespace Summoner
 * @version v4
 * @name ISummonerDTO
 */
export class SummonerDTO implements Interfaces.Summoner.v4.ISummonerDTO {
    accountId!: string;
    profileIconId!: number;
    revisionDate!: number;
    id!: string;
    puuid!: string;
    summonerLevel!: number;
}
