import { Interfaces } from '@/riotentity';

export function isISummonerDTO(obj: any): obj is Interfaces.Summoner.v4.ISummonerDTO {
    const hasFields = (
        'accountId' in obj &&
        'profileIconId' in obj &&
        'revisionDate' in obj &&
        'name' in obj &&
        'id' in obj &&
        'puuid' in obj &&
        'summonerLevel' in obj &&
        Object.keys(obj).length === 7
    );

    return hasFields;
}
