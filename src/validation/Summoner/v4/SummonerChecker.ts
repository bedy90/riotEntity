import { Interfaces } from '@/index';

export function isISummonerDTO(obj: any): obj is Interfaces.Summoner.v4.ISummonerDTO {
    return (
        'accountId' in obj &&
        'profileIconId' in obj &&
        'revisionDate' in obj &&
        'name' in obj &&
        'id' in obj &&
        'puuid' in obj &&
        'summonerLevel' in obj
    );
}
