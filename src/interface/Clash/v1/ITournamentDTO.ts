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

export interface ITournamentPhaseDTO {
    id: number;
    registrationTime: number;
    startTime: number;
    cancelled: boolean;
}
