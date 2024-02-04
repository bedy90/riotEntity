
import { Interfaces } from '@/index';

export function isILeagueEntryDTO(obj: any): obj is Interfaces.League.v4.ILeagueEntryDTO {
    return (
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
        'inactive' in obj
    );
}
