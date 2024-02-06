import { Interfaces } from '@/index';

export function isILeagueListDTO(obj: any): obj is Interfaces.League.v4.ILeagueListDTO {
    return (
        'leagueId' in obj &&
        'entries' in obj &&
        'tier' in obj &&
        'name' in obj &&
        'queue' in obj
    );
}
export function isILeagueItemDTO(obj: any): obj is Interfaces.League.v4.ILeagueItemDTO {
    return (
        'freshBlood' in obj &&
        'wins' in obj &&
        'summonerName' in obj &&
        'miniSeries' in obj &&
        'inactive' in obj &&
        'veteran' in obj &&
        'hotStreak' in obj &&
        'rank' in obj &&
        'leaguePoints' in obj &&
        'losses' in obj &&
        'summonerId' in obj
    );
}

export function isIMiniSeriesDTO(obj: any): obj is Interfaces.League.v4.IMiniSeriesDTO {
    return (
        'losses' in obj &&
        'progress' in obj &&
        'target' in obj &&
        'wins' in obj
    );
}
