/**
 * Interface IActiveShardDTO
 *
 * @NotImplemented
 * @namespace Account
 * @version v1
 * @name IActiveShardDTO
 */
export interface IActiveShardDTO_v1 {
    /**
     * Encrypted PUUID. Exact length of 78 characters.
     */
    puuid: number;

    /**
     * lor or val
     */
    game: string;

    activeShard: string;
}