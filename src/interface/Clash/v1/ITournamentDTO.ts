import { Interfaces } from '@/riotentity';
/**
 * Interface ITournamentDTO
 *
 * @namespace Clash
 * @version v1
 * @name ITournamentDTO
 * @prefix Clash_
 */
export interface ITournamentDTO_v1 {
    id: number;

    themeId: number;

    nameKey: string;

    nameKeySecondary: string;

    /**
     * 	Tournament phase
     */
    schedule: Interfaces.IClash_TournamentPhaseDTO_v1[];
}