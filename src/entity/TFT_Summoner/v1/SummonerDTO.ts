import { Interfaces } from '@/riotentity';

export class SummonerDTO implements Interfaces.TFT_Summoner.v1.ISummonerDTO {
    accountId!: string;
    profileIconId!: number;
    revisionDate!: number;
    id!: string;
    puuid!: string;
    summonerLevel!: number;
}
