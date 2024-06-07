import { Level } from '@/src/declaration';

/**
 * Interface IChallengePercentile
 * Challenge percentile for a specific challenge (without Key)
 * 
 * @namespace LeagueExp
 * @version v1
 * @name IChallengePercentile
 * @NotImplemented
 */
export interface IChallengePercentile {
    percentile : ChallengePercentileType;
}

/**
 * Interface IChallengePercentiles
 * All challenges percentile
 * 
 * @namespace LeagueExp
 * @version v1
 * @name IChallengePercentiles
 * @NotImplemented
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