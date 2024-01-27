// --------------------------------------
// Interface
// --------------------------------------
export interface ILeagueListDTO {
    leagueId: string;
    entries: Array<ILeagueItemDTO>;
    tier: string;
    name: string;
    queue: string;
}

export interface ILeagueItemDTO {
    freshBlood: boolean;
    /**
     * 	Winning team on Summoners Rift.
     */
    wins: number;
    summonerName: string;
    miniSeries: IMiniSeriesDTO;
    inactive: boolean;
    veteran: boolean;
    hotStreak: boolean;
    rank: string;
    leaguePoints: number;
    /**
     * Losing team on Summoners Rift.
     */
    losses: number;
    /**
     * Player's encrypted summonerId.
     */
    summonerId: string;
}

export interface IMiniSeriesDTO {
    losses: number;
    progress: string;
    target: number;
    wins: number;
}

// --------------------------------------
// Class
// --------------------------------------
export class LeagueListDTO implements ILeagueListDTO {
    leagueId!: string;
    entries!: ILeagueItemDTO[];
    tier!: string;
    name!: string;
    queue!: string;

}

export class LeagueItemDTO implements ILeagueItemDTO {
    freshBlood!: boolean;
    wins!: number;
    summonerName!: string;
    miniSeries!: IMiniSeriesDTO;
    inactive!: boolean;
    veteran!: boolean;
    hotStreak!: boolean;
    rank!: string;
    leaguePoints!: number;
    losses!: number;
    summonerId!: string;

}

export class MiniSeriesDTO implements IMiniSeriesDTO {
    losses!: number;
    progress!: string;
    target!: number;
    wins!: number;
}

// --------------------------------------
// Checker
// --------------------------------------
export class LeagueListChecker {
    static isLeagueListDTO(obj: any): obj is ILeagueListDTO {
        return (
            'leagueId' in obj &&
            'entries' in obj &&
            'tier' in obj &&
            'name' in obj &&
            'queue' in obj
        );
    }
    static isLeagueItemDTO(obj: any): obj is ILeagueItemDTO {
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

    static isMiniSeriesDTO(obj: any): obj is IMiniSeriesDTO {
        return (
            'losses' in obj &&
            'progress' in obj &&
            'target' in obj &&
            'wins' in obj
        );
    }
}
