/**
 * Interface IAccountRegionDTO
 *
 * @namespace Account
 * @version v1
 * @name IAccountRegionDTO
 */
export interface IAccountRegionDTO_v1 {
    /**
     * Player Universal Unique Identifier
     * @length 78
     */
    puuid: string;

    /**
     * Game to lookup active region
     */
    gameName: string;

    /**
     * Player active region
     */
    region: string;
}
