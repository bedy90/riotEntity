import { Level } from '@/src/declaration';

/**
 * Interface IChallengePercentile
 * Challenge percentile for a specific challenge (without Key)
 *
 * @namespace LoL_Challenges
 * @version v1
 * @name IChallengePercentile
 * @NotImplemented
 */
export interface IChallengePercentile_v1 {
    percentile : ChallengePercentileType_v1;
}

/**
 * Interface IChallengePercentiles
 * All challenges percentile
 *
 * @namespace LoL_Challenges
 * @version v1
 * @name IChallengePercentiles
 * @NotImplemented
 */
export interface IChallengePercentiles_v1 {
    percentiles : ChallengePercentilesType_v1;
}


export type ChallengePercentilesType_v1 = Record<string, Map<number, ChallengePercentileType_v1>>;

/**
 * Challenge percentile for a specific challenge
 */
export type ChallengePercentileType_v1 = Record<string, Map<Level, number>>;
/*
    Long = bigint
    Integer = number
    Double = number
*/