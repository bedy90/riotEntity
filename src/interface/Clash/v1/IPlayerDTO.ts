import { ClashPosition, ClashRole } from '@/src/declaration';

/**
 * Interface IPlayerDTO
 *
 * @namespace Clash
 * @version v1
 * @name IPlayerDTO
 */
export interface IPlayerDTO {
    summonerId: string;

    teamId: string;

    /**
     * (Legal values: UNSELECTED, FILL, TOP, JUNGLE, MIDDLE, BOTTOM, UTILITY)
     */
    position: ClashPosition | string;

    /**
     * 	(Legal values: CAPTAIN, MEMBER)
     */
    role: ClashRole | string;
}
