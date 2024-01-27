// --------------------------------------
// Interface
// --------------------------------------
export interface ITournamentDTO {
    id: number;
    themeId: number;
    nameKey: string;
    nameKeySecondary: string;
    /**
     * 	Tournament phase
     */
    schedule: Array<ITournamentPhaseDTO>;
}

export interface ITournamentPhaseDTO {
    id: number;
    registrationTime: number;
    startTime: number;
    cancelled: boolean;
}

// --------------------------------------
// Class
// --------------------------------------
export class TournamentDTO implements ITournamentDTO {
    id!: number;
    themeId!: number;
    nameKey!: string;
    nameKeySecondary!: string;
    schedule!: ITournamentPhaseDTO[];

}
export class TournamentPhaseDTO implements ITournamentPhaseDTO {
    id!: number;
    registrationTime!: number;
    startTime!: number;
    cancelled!: boolean;

}


// --------------------------------------
// Checker
// --------------------------------------
export class TournamentChecker {
    static isTournamentDTO(obj: any): obj is ITournamentDTO {
        return (
            'id' in obj &&
            'themeId' in obj &&
            'nameKey' in obj &&
            'nameKeySecondary' in obj &&
            'schedule' in obj
        );
    }

    static isTournamentPhaseDTO(obj: any): obj is ITournamentPhaseDTO {
        return (
            'id' in obj &&
            'registrationTime' in obj &&
            'startTime' in obj &&
            'cancelled' in obj
        );
    }
}
