import { Interfaces } from '@/riotentity';

/**
 * Interface ITeamDTO
 * 
 * @namespace Clash
 * @version v1
 * @name ITeamDTO
 */
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
    players: Interfaces.Clash.v1.IPlayerDTO[];
}