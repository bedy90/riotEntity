/*
    ! : assertion de non-nullabilité
    ? : propriété optionnelle, peut être "null" ou "undefined".
*/
export interface IAccountDTO {
    /**
     * Player Universal Unique Identifier
     * Length : 78
     */
    puuid: string;
    /**
     * MinLength : 3
     * MaxLength : 16
     * This field may be excluded from the response if the account doesn't have a gameName.
     *  Do not use the # symbol. This is the separator between Game Name and Tagline.
     */
    gameName: string;
    /**
     * MinLength : 3
     * MaxLength : 5
     * This field may be excluded from the response if the account doesn't have a tagLine.
     * [Any Unicode letter is supported]
     */
    tagLine: string;
}
