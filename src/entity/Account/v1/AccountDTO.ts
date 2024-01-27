// --------------------------------------
// Interface
// --------------------------------------
export interface IAccountDTO {
    puuid: string;
    /**
     * MinLength : 3
     * MaxLength : 16
     */
    gameName: string;
    /**
     * MinLength : 3
     * MaxLength : 5
     */
    tagLine: string;
}


// --------------------------------------
// Class
// --------------------------------------
export class AccountDTO implements IAccountDTO {
    puuid!: string;
    gameName!: string;
    tagLine!: string;
}

// --------------------------------------
// Checker
// --------------------------------------
export class AccountChecker {
    static isAccountDTO(obj: any): obj is IAccountDTO {
        return (
            'puuid' in obj &&
            'gameName' in obj &&
            'tagLine' in obj
        );
    }
}
