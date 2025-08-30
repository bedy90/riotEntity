/**
 * Interface ISummonerDTO_Global
 *
 * @namespace Global
 * @version v1
 * @name ISummonerDTO_Global
 * @strict
 */
export interface ISummonerDTO_Global {
    /**
     * 	ID of the summoner icon associated with the summoner
     */
    profileIconId: number;

    /**
     * Date summoner was last modified specified as epoch milliseconds.
     * The following events will update this timestamp: profile icon change,
     * playing the tutorial or advanced tutorial, finishing a game, summoner name change
     */
    revisionDate?: bigint;

    /**
     * Encrypted PUUID. Exact length of 78 characters.
     * @length 78
     */
    puuid: string;

    /**
     * Summoner level associated with the summoner.
     */
    summonerLevel: bigint;
}
