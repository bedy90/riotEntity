import { Interfaces } from '../../../index.js';

/**
 * Interface ITeamDTO
 *
 * @namespace Clash
 * @version v1
 * @name ITeamDTO
 * @prefix Clash_
 */
export interface ITeamDTO_v1 {
    id: string;

    tournamentId: number;

    name: string;

    iconId: number;

    tier: number;

    /**
     * Summoner ID of the team captain.
     * TODO
     */
    captain: string;

    abbreviation: string;

    /**
     * 	Team members.
     */
    players: Interfaces.IClash_PlayerDTO_v1[];
}

