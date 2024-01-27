import { IMiniSeriesDTO } from './LeagueListDTO';

// --------------------------------------
// Interface
// --------------------------------------
export interface ILeagueEntryDTO {
    leagueId: string;
    /**
     * 	Player's summonerId (Encrypted)
     */
    summonerId: string;
    summonerName: string;
    queueType: string;
    tier: string;
    /**
     * The player's division within a tier.
     */
    rank: string;
    leaguePoints: number;
    /**
     * Winning team on Summoners Rift. First placement in Teamfight Tactics.
     */
    wins: number;
    /**
     * Losing team on Summoners Rift. Second through eighth placement in Teamfight Tactics.
     */
    losses: number;
    hotStreak: boolean;
    veteran: boolean;
    freshBlood: boolean;
    inactive: boolean;
    miniSeries: IMiniSeriesDTO;
}

// --------------------------------------
// Class
// --------------------------------------
export class LeagueEntryDTO implements ILeagueEntryDTO {
    leagueId!: string;
    summonerId!: string;
    summonerName!: string;
    queueType!: string;
    tier!: string;
    rank!: string;
    leaguePoints!: number;
    wins!: number;
    losses!: number;
    hotStreak!: boolean;
    veteran!: boolean;
    freshBlood!: boolean;
    inactive!: boolean;
    miniSeries!: IMiniSeriesDTO;
}

// --------------------------------------
// Checker
// --------------------------------------
export class LeagueEntryChecker {
    static isLeagueEntryDTO(obj: any): obj is ILeagueEntryDTO {
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
}
