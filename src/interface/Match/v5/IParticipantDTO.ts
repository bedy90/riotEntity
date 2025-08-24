// eslint-disable max-len
// eslint-disable no-shadow
import { Interfaces, Declarations } from '../../../index.js';

/**
 * Interface IParticipantDTO
 *
 * @namespace Match
 * @version v5
 * @name IParticipantDTO
 * @strict
 */
export interface IParticipantDTO_v5 {
    /**
     * Yellow crossed swords
     */
    allInPings: number;

    /**
     * Green flag
     */
    assistMePings: number;

    assists: number;

    baronKills: number;

    bountyLevel: number;

    champExperience: number;

    champLevel: number;

    /**
     * Prior to patch 11.4, on Feb 18th, 2021, this field returned invalid championIds.
     * We recommend determining the champion based on the championName field for matches played prior to patch 11.4.
     */
    championId: number;

    championName: string;

    /**
     * Blue generic ping (ALT+click)
     */
    commandPings: number;

    /**
     * This field is currently only utilized for Kayn's transformations. (Legal values: 0 - None, 1 - Slayer, 2 - Assassin)
     */
    championTransform: Declarations.KaynChampionTransform | number;

    consumablesPurchased: number;

    challenges: Interfaces.IChallengesDTO[];

    damageDealtToBuildings: number;

    damageDealtToObjectives: number;

    damageDealtToTurrets: number;

    damageSelfMitigated: number;

    deaths: number;

    detectorWardsPlaced: number;

    doubleKills: number;

    dragonKills: number;

    eligibleForProgression: boolean;

    /**
     * Yellow questionmark
     */
    enemyMissingPings: number;

    /**
     * Red eyeball
     */
    enemyVisionPings: number;

    firstBloodAssist: boolean;

    firstBloodKill: boolean;

    firstTowerAssist: boolean;

    firstTowerKill: boolean;

    gameEndedInEarlySurrender: boolean;

    gameEndedInSurrender: boolean;

    holdPings: number;

    /**
     * Yellow circle with horizontal line
     */
    getBackPings: number;

    goldEarned: number;

    goldSpent: number;

    /**
     * Both individualPosition and teamPosition are computed by the game server and are different versions of the most likely position played by a player.
     * The individualPosition is the best guess for which position the player actually played in isolation of anything else.
     * The teamPosition is the best guess for which position the player actually played if we add the constraint that each team must have one top player,
     *  one jungle, one middle, etc. Generally the recommendation is to use the teamPosition field over the individualPosition field.
     */
    individualPosition: string;

    inhibitorKills: number;

    inhibitorTakedowns: number;

    inhibitorsLost: number;

    item0: number;

    item1: number;

    item2: number;

    item3: number;

    item4: number;

    item5: number;

    item6: number;

    itemsPurchased: number;

    killingSprees: number;

    kills: number;

    lane: string;

    largestCriticalStrike: number;

    largestKillingSpree: number;

    largestMultiKill: number;

    longestTimeSpentLiving: number;

    magicDamageDealt: number;

    magicDamageDealtToChampions: number;

    magicDamageTaken: number;

    missions: Interfaces.IMissionsDTO_v5;

    /**
     * neutralMinionsKilled = mNeutralMinionsKilled, which is incremented on kills of kPet and kJungleMonster
     */
    neutralMinionsKilled: number;

    /**
     * Green ward
     */
    needVisionPings: number;

    nexusKills: number;

    nexusTakedowns: number;

    nexusLost: number;

    objectivesStolen: number;

    objectivesStolenAssists: number;

    /**
     * Blue arrow pointing at ground
     */
    onMyWayPings: number;

    participantId: number;

    playerScore0: number;

    playerScore1: number;

    playerScore2: number;

    playerScore3: number;

    playerScore4: number;

    playerScore5: number;

    playerScore6: number;

    playerScore7: number;

    playerScore8: number;

    playerScore9: number;

    playerScore10: number;

    playerScore11: number;

    pentaKills: number;

    perks: Interfaces.IPerksDTO_v5;

    physicalDamageDealt: number;

    physicalDamageDealtToChampions: number;

    physicalDamageTaken: number;

    placement: number;

    playerAugment1: number;

    playerAugment2: number;

    playerAugment3: number;

    playerAugment4: number;

    playerSubteamId: number;

    /**
     * Green minion
     */
    pushPings: number;

    profileIcon: number;

    puuid: string;

    quadraKills: number;

    riotIdGameName: string;

    riotIdTagline: string;

    role: string;

    sightWardsBoughtInGame: number;

    spell1Casts: number;

    spell2Casts: number;

    spell3Casts: number;

    spell4Casts: number;

    summoner1Casts: number;

    summoner1Id: number;

    summoner2Casts: number;

    summoner2Id: number;

    summonerId: string;

    summonerLevel: number;

    // Why not removed Rito
    summonerName: string;

    teamEarlySurrendered: boolean;

    teamId: number;

    /**
     * Both individualPosition and teamPosition are computed by the game server and are different versions of the most likely position
     * played by a player. The individualPosition is the best guess for which position the player actually played in isolation of anything else.
     * The teamPosition is the best guess for which position the player actually played if we add the constraint that each team must have
     * one top player, one jungle, one middle, etc. Generally the recommendation is to use the teamPosition field over the individualPosition field.
     */
    teamPosition: string;

    timeCCingOthers: number;

    timePlayed: number;

    totalAllyJungleMinionsKilled: number;

    totalDamageDealt: number;

    totalDamageDealtToChampions: number;

    totalDamageShieldedOnTeammates: number;

    totalDamageTaken: number;

    totalEnemyJungleMinionsKilled: number;

    totalHeal: number;

    totalHealsOnTeammates: number;

    totalMinionsKilled: number;

    totalTimeCCDealt: number;

    totalTimeSpentDead: number;

    totalUnitsHealed: number;

    tripleKills: number;

    trueDamageDealt: number;

    trueDamageDealtToChampions: number;

    trueDamageTaken: number;

    turretKills: number;

    turretTakedowns: number;

    turretsLost: number;

    unrealKills: number;

    visionScore: number;

    visionClearedPings: number;

    visionWardsBoughtInGame: number;

    wardsKilled: number;

    wardsPlaced: number;

    win: boolean;
}
