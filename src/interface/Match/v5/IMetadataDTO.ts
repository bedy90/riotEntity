/**
 * Interface IMetadataDTO
 *
 * @namespace Match
 * @version v5
 * @name IMetadataDTO
 */
export interface IMetadataDTO {
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
