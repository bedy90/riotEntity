/**
 * Interface IActiveShardDTO
 *
 * @namespace Account
 * @version v1
 * @name IActiveShardDTO
 * @strict
 */
export interface IActiveShardDTO_v1 {
    /**
     * Encrypted PUUID. Exact length of 78 characters.
     * @length 78
     */
    puuid: number;

    /**
     * lor or val
     */
    game: string;

    activeShard: string;
}