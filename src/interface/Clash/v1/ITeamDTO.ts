import { IPlayerDTO } from './IPlayerDTO';

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
    players: IPlayerDTO[];
}
