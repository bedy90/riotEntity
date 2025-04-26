import { Interfaces } from '@/riotentity';

/**
 * Interface ITeamDTO
 *
 * @namespace Clash
 * @version v1
 * @name ITeamDTO
 */
export interface ITeamDTO_v1 {
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
    players: Interfaces.Clash_IPlayerDTO_v1[];
}

