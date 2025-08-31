import { Declarations } from '../../../index.js';

/**
 * Interface IPlayerDTO
 *
 * @namespace Clash
 * @version v1
 * @name IPlayerDTO
 * @prefix Clash_
 * @strict
 */
export interface IPlayerDTO_v1 {
     /**
     * Player Universal Unique Identifier
     * @length 78
     */
    puuid: string;

    /**
     * Team Universal Unique Identifier. Only included if the player is on a team.
     * Value only if « clash/v1players/by-puuid »
     */
    teamId?: string;

    /**
     * (Legal values: UNSELECTED, FILL, TOP, JUNGLE, MIDDLE, BOTTOM, UTILITY)
     */
    position: Declarations.ClashPosition | string;

    /**
     * 	(Legal values: CAPTAIN, MEMBER)
     */
    role: Declarations.ClashRole | string;
}
