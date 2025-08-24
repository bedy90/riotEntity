/**
 * Interface IAccountDTO
 *
 * @namespace Account
 * @version v1
 * @name IAccountDTO
 * @strict
 */
export interface IAccountDTO_v1 {
    /**
     * Player Universal Unique Identifier
     * @length 78
     */
    puuid: string;

    /**
     * @minLength 3
     * @maxLength 16
     * This field may be excluded from the response if the account doesn't have a gameName.
     * Do not use the # symbol. This is the separator between Game Name and Tagline.
     */
    gameName?: string;

    /**
     * @minLength 3
     * @maxLength 5
     * This field may be excluded from the response if the account doesn't have a tagLine.
     * [Any Unicode letter is supported]
     */
    tagLine?: string;
}
