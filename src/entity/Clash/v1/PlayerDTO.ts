// --------------------------------------
// Interface
// --------------------------------------
export interface IPlayerDTO {
    summonerId: string;
    teamId: string;
    /**
     * (Legal values: UNSELECTED, FILL, TOP, JUNGLE, MIDDLE, BOTTOM, UTILITY)
     */
    position: string;
    /**
     * 	(Legal values: CAPTAIN, MEMBER)
     */
    role: string;
}

// --------------------------------------
// Class
// --------------------------------------
export class PlayerDTO implements IPlayerDTO {
    summonerId!: string;
    teamId!: string;
    position!: string;
    role!: string;
}

// --------------------------------------
// Checker
// --------------------------------------
export class PlayerChecker {
    static isDTO(obj: any): obj is IPlayerDTO {
        return (
            'summonerId' in obj &&
            'teamId' in obj &&
            'position' in obj &&
            'role' in obj
        );
    }
}
