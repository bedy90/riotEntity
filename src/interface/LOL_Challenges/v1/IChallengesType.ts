import { Declarations } from '../../../index.js';
// import { Level } from '@/declaration';

/**
 * Interface IChallengePercentile
 * Challenge percentile for a specific challenge (without Key)
 *
 * @namespace LoL_Challenges
 * @version v1
 * @name IChallengePercentile
 * @prefix LOL_
 * @NotImplemented
 */
export interface IChallengePercentile_v1 {
    percentile : IChallengePercentileType_v1;
}

/**
 * Interface IChallengePercentiles
 * All challenges percentile
 *
 * @namespace LoL_Challenges
 * @version v1
 * @name IChallengePercentiles
 * @prefix LOL_
 * @NotImplemented
 */
export interface IChallengePercentiles_v1 {
    percentiles : IChallengePercentilesType_v1;
}

/**
 * Interface IChallengePercentilesType
 * Challenge percentile
 * @namespace LoL_Challenges
 * @version v1
 * @name ChallengePercentilesType
 * @prefix LOL_
 * @NotImplemented
 */
export type IChallengePercentilesType_v1 = Record<string, Map<number, IChallengePercentileType_v1>>;

/**
 * Intercface IChallengePercentileType
 * Challenge percentile for a specific challenge
 * @namespace LoL_Challenges
 * @version v1
 * @name ChallengePercentileType
 * @prefix LOL_
 */
export type IChallengePercentileType_v1 = Record<string, Map<Declarations.Level, number>>;
/*
    Long = bigint
    Integer = number
    Double = number
*/