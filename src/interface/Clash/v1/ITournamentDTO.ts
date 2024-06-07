import { ITournamentPhaseDTO } from './ITournamentPhaseDTO';

/**
 * Interface ITournamentDTO
 * 
 * @namespace Clash
 * @version v1
 * @name ITournamentDTO
 */
export interface ITournamentDTO {
    id: number;

    themeId: number;

    nameKey: string;

    nameKeySecondary: string;

    /**
     * 	Tournament phase
     */
    schedule: ITournamentPhaseDTO[];
}