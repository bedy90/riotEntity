/**
 * @NotImplemented
 */
import { Level } from '@/src/declaration';

/**
 * Challenge percentile for a specific challenge (without Key)
 */
export interface IChallengePercentile {
    percentile : ChallengePercentileType;
}

/**
 * All challenges percentile
 */
export interface IChallengePercentiles {
    percentiles : ChallengePercentilesType;
}

type ChallengePercentilesType = Record<string, Map<number, ChallengePercentileType>>;

/**
 * Challenge percentile for a specific challenge
 */
type ChallengePercentileType = Record<string, Map<Level, number>>;
/*
    Long = bigint
    Integer = number
    Double = number
*/