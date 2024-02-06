
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
