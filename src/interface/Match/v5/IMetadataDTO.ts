/**
 * Interface IMetadataDTO
 *
 * @namespace Match
 * @version v5
 * @name IMetadataDTO
 * @strict
 */
export interface IMetadataDTO_v5 {
    /**
     * 	Match data version.
     */
    dataVersion: string;
    /**
     * Match id.
     */
    matchId: string;
    /**
     * A list of participant PUUIDs.
     */
    participants: string[];
}
