/**
 * Interface ISummonerDTO_Global
 *
 * @namespace Global
 * @version v1
 * @name ISummonerDTO_Global
 */
export interface ISummonerDTO_Global {
    /**
     * Encrypted account ID. Max length 56 characters.
     * @maxLength 56
     */
    accountId: string;

    /**
     * 	ID of the summoner icon associated with the summoner
     */
    profileIconId: number;

    /**
     * Date summoner was last modified specified as epoch milliseconds.
     * The following events will update this timestamp: profile icon change,
     * playing the tutorial or advanced tutorial, finishing a game, summoner name change
     */
    revisionDate?: number;

    /**
     * Encrypted summoner ID. Max length 63 characters.
     * @maxLength 63
     */
    id: string;

    /**
     * Encrypted PUUID. Exact length of 78 characters.
     * @length 78
     */
    puuid: string;

    /**
     * Summoner level associated with the summoner.
     */
    summonerLevel: number;
}
