/**
 * Interface IPlayerInfoDTO
 * 
 * @namespace LoL_Challenges
 * @version v1
 * @name IPlayerInfoDTO
 * @NotImplemented
 */
export interface IPlayerInfoDTO {
    challenges: IChallengeInfo[];

    preferences: IPlayerClientPreference;

    totalPoints: IChallengePoint;

    categoryPoints: Map<string, IChallengePoint>;
}

/**
 * Interface IChallengePoint
 * 
 * @namespace LoL_Challenges
 * @version v1
 * @name IChallengePoint
 * @NotImplemented
 */
export interface IChallengePoint {
    level: string;
    current: number;
    max: number;
    percentile: number;
}

/**
 * Interface IChallengeInfo
 * 
 * @namespace LoL_Challenges
 * @version v1
 * @name IChallengeInfo
 * @NotImplemented
 */
export interface IChallengeInfo {
    challengeId: number; // Ex: 0
    percentile: number; //  0.006;
    level: string; // "DIAMOND";
    value: number; //  14165;
    achievedTime: number; // 1706668297146
}

/**
 * Interface IPlayerClientPreference
 * 
 * @namespace LoL_Challenges
 * @version v1
 * @name IPlayerClientPreference
 * @NotImplemented
 */
export interface IPlayerClientPreference {
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