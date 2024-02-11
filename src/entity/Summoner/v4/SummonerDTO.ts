import { Interfaces } from '@/riotentity';

export class SummonerDTO implements Interfaces.Summoner.v4.ISummonerDTO {
    accountId!: string;
    profileIconId!: number;
    revisionDate!: number;
    name!: string;
    id!: string;
    puuid!: string;
    summonerLevel!: number;
}

