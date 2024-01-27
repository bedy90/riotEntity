import { IPlayerDTO } from './PlayerDTO';

// --------------------------------------
// Interface
// --------------------------------------
export interface ITeamDTO {
    id: string;
    tournamentId: number;
    name: string;
    iconId: number;
    tier: number;
    /**
     * Summoner ID of the team captain.
     */
    captain: string;
    abbreviation: string;
    /**
     * 	Team members.
     */
    players: Array<IPlayerDTO>;
}

// --------------------------------------
// Class
// --------------------------------------
export class TeamDTO implements ITeamDTO {
    id!: string;
    tournamentId!: number;
    name!: string;
    iconId!: number;
    tier!: number;
    captain!: string;
    abbreviation!: string;
    players!: IPlayerDTO[];

}

// --------------------------------------
// Checker
// --------------------------------------
export class TeamChecker {
    static isDTO(obj: any): obj is ITeamDTO {
        return (
            'id' in obj &&
            'tournamentId' in obj &&
            'name' in obj &&
            'iconId' in obj &&
            'tier' in obj &&
            'captain' in obj &&
            'abbreviation' in obj &&
            'players' in obj
        );
    }
}
