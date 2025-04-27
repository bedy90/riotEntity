import { Declarations } from '@/riotentity';

/**
 * Interface IPlayerDTO
 *
 * @namespace Clash
 * @version v1
 * @name IPlayerDTO
 * @prefix Clash_
 */
export interface IPlayerDTO_v1 {
    summonerId: string;

    teamId: string;

    /**
     * (Legal values: UNSELECTED, FILL, TOP, JUNGLE, MIDDLE, BOTTOM, UTILITY)
     */
    position: Declarations.ClashPosition | string;

    /**
     * 	(Legal values: CAPTAIN, MEMBER)
     */
    role: Declarations.ClashRole | string;
}
