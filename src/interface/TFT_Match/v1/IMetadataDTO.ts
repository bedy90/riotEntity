/**
 * Interface TFT - IMetadataDTO
 *
 * @namespace TFT_Match
 * @version v1
 * @name IMetadataDTO
 */
export interface IMetadataDTO_v1 {
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
