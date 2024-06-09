/* eslint-disable max-len */
/* eslint-disable no-shadow */
import { Interfaces, KaynChampionTransform } from '@/riotentity';

/**
 * Interface IParticipantDTO
 *
 * @namespace Match
 * @version v5
 * @name IParticipantDTO
 */
export interface IParticipantDTO {
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
     * This field is currently only utilized for Kayn's transformations. (Legal values: 0 - None, 1 - Slayer, 2 - Assassin)
     */
    championTransform: KaynChampionTransform | number;

    consumablesPurchased: number;

    damageDealtToBuildings: number;

    damageDealtToObjectives: number;

    damageDealtToTurrets: number;

    damageSelfMitigated: number;

    deaths: number;

    detectorWardsPlaced: number;

    doubleKills: number;

    dragonKills: number;

    firstBloodAssist: boolean;

    firstBloodKill: boolean;

    firstTowerAssist: boolean;

    firstTowerKill: boolean;

    gameEndedInEarlySurrender: boolean;

    gameEndedInSurrender: boolean;

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

    neutralMinionsKilled: number;

    nexusKills: number;

    nexusTakedowns: number;

    nexusLost: number;

    objectivesStolen: number;

    objectivesStolenAssists: number;

    participantId: number;

    pentaKills: number;

    perks: Interfaces.Match.v5.IPerksDTO;

    physicalDamageDealt: number;

    physicalDamageDealtToChampions: number;

    physicalDamageTaken: number;

    profileIcon: number;

    puuid: string;

    quadraKills: number;

    riotIdName: string;

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

    totalDamageDealt: number;

    totalDamageDealtToChampions: number;

    totalDamageShieldedOnTeammates: number;

    totalDamageTaken: number;

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

    visionWardsBoughtInGame: number;

    wardsKilled: number;

    wardsPlaced: number;

    win: boolean;
}

/**
 * Interface ITeamDTO
 *
 * @namespace Match
 * @version v5
 * @name ITeamDTO
 */
export interface ITeamDTO {
    bans: Interfaces.Match.v5.IBanDTO[];

    objectives: Interfaces.Match.v5.IObjectivesDTO;

    teamId: number;

    win: boolean;
}

/**
 * Interface IBanDTO
 *
 * @namespace Match
 * @version v5
 * @name IBanDTO
 */
export interface IBanDTO {
    championId: number;

    pickTurn: number;
}

/**
 * Interface IObjectivesDTO
 *
 * @namespace Match
 * @version v5
 * @name IObjectivesDTO
 */
export interface IObjectivesDTO {
    baron: Interfaces.Match.v5.IObjectiveDTO;

    champion: Interfaces.Match.v5.IObjectiveDTO;

    dragon: Interfaces.Match.v5.IObjectiveDTO;

    inhibitor: Interfaces.Match.v5.IObjectiveDTO;

    riftHerald: Interfaces.Match.v5.IObjectiveDTO;

    tower: Interfaces.Match.v5.IObjectiveDTO;
}

/**
 * Interface IObjectiveDTO
 *
 * @namespace Match
 * @version v5
 * @name IObjectiveDTO
 */
export interface IObjectiveDTO {
    first: boolean;

    kills: number;
}
