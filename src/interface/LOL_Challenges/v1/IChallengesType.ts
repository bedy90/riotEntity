import { Level } from "@/src/declaration";

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

type ChallengePercentilesType = {
    // Map[Long, Map[Integer, Map[Level, Double]]]
    [key: string]: Map<number, ChallengePercentileType>
};

/**
 * Challenge percentile for a specific challenge 
 */
type ChallengePercentileType = {
    // Map[Long, Map[Integer, Map[Level, Double]]]
    [key: string]: Map<Level, number>
};
/*
    Long = bigint 
    Integer = number
    Double = number
*/