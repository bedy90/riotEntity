/**
 * Interface IChallengeInfo
 *
 * @namespace LoL_Challenges
 * @version v1
 * @name IChallengeInfo
 * @NotImplemented
 * @strict
 */
export interface IChallengeInfo_v1 {
    challengeId: number; // Ex: 0
    percentile: number; //  0.006;
    level: string; // "DIAMOND";
    value: number; //  14165;
    achievedTime: number; // 1706668297146
}


/**
 * Interface IChallengePoint
 *
 * @namespace LoL_Challenges
 * @version v1
 * @name IChallengePoint
 * @NotImplemented
 * @strict
 */
export interface IChallengePoint_v1 {
    level: string;
    current: number;
    max: number;
    percentile: number;
}


/**
 * Interface IPlayerClientPreference
 *
 * @namespace LoL_Challenges
 * @version v1
 * @name IPlayerClientPreference
 * @NotImplemented
 * @strict
 */
export interface IPlayerClientPreference_v1 {
    /*
      "bannerAccent": "2";
            "title": "";
            "challengeIds": [
                600006;
                302105;
                2023018
            ];
            "crestBorder": "1";
            "prestigeCrestBorderLevel": 500
    */
    bannerAccent: number;
    title: string;
    challengeIds: number[];
    crestBorder: number;
    prestigeCrestBorderLevel: number;
}

/**
 * Interface IPlayerInfoDTO
 *
 * @namespace LoL_Challenges
 * @version v1
 * @name IPlayerInfoDTO
 * @NotImplemented
 * @strict
 */
export interface IPlayerInfoDTO_v1 {
    challenges: IChallengeInfo_v1[];

    preferences: IPlayerClientPreference_v1;

    totalPoints: IChallengePoint_v1;

    categoryPoints: Map<string, IChallengePoint_v1>;
}
