import { Level } from '@/src/declaration';

// TODO: A tester

/**
 * Challenge percentile for a specific challenge (without Key)
 */
export interface ChallengePercentile {
    percentile : ChallengePercentileType
}

/**
 * All challenges percentile
 */
export interface ChallengePercentiles {
    percentiles : ChallengePercentilesType
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