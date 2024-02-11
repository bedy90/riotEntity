import { Interfaces } from '@/riotentity';

export function isILeagueEntryDTO(obj: any): obj is Interfaces.League.v4.ILeagueEntryDTO {
    const hasFields = (
        'leagueId' in obj &&
        'summonerId' in obj &&
        'summonerName' in obj &&
        'queueType' in obj &&
        'tier' in obj &&
        'rank' in obj &&
        'leaguePoints' in obj &&
        'wins' in obj &&
        'losses' in obj &&
        'hotStreak' in obj &&
        'veteran' in obj &&
        'freshBlood' in obj &&
        'inactive' in obj &&
        Object.keys(obj).length === 13
    );

    return hasFields;
}
