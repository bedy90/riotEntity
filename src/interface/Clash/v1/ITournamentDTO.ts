import { ITournamentPhaseDTO } from './ITournamentPhaseDTO';

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