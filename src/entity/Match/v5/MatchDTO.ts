/* eslint-disable max-len */
/* eslint-disable no-shadow */

import { KaynChampionTransform } from '../../../declaration';
import { Interfaces } from '@/index';

export class MatchDTO implements Interfaces.Match.v5.IMatchDTO {
    metadata!: Interfaces.Match.v5.IMetadataDTO;
    info!: Interfaces.Match.v5.IInfoDTO;
}

export class MetadataDTO implements Interfaces.Match.v5.IMetadataDTO {
    dataVersion!: string;
    matchId!: string;
    participants!: Array<string>;
}

export class InfoDTO implements Interfaces.Match.v5.IInfoDTO {
    gameCreation!: number;
    gameDuration!: number;
    gameEndTimestamp!: number;
    gameId!: number;
    gameMode!: string;
    gameName!: string;
    gameStartTimestamp!: number;
    gameType!: string;
    gameVersion!: string;
    mapId!: number;
    participants!: Interfaces.Match.v5.IParticipantDTO[];
    platformId!: string;
    queueId!: number;
    teams!: Interfaces.Match.v5.ITeamDTO[];
    tournamentCode!: string;

}

export class ParticipantDTO implements Interfaces.Match.v5.IParticipantDTO {
    assists!: number;
    baronKills!: number;
    bountyLevel!: number;
    champExperience!: number;
    champLevel!: number;
    championId!: number;
    championName!: string;
    championTransform!: KaynChampionTransform;
    consumablesPurchased!: number;
    damageDealtToBuildings!: number;
    damageDealtToObjectives!: number;
    damageDealtToTurrets!: number;
    damageSelfMitigated!: number;
    deaths!: number;
    detectorWardsPlaced!: number;
    doubleKills!: number;
    dragonKills!: number;
    firstBloodAssist!: boolean;
    firstBloodKill!: boolean;
    firstTowerAssist!: boolean;
    firstTowerKill!: boolean;
    gameEndedInEarlySurrender!: boolean;
    gameEndedInSurrender!: boolean;
    goldEarned!: number;
    goldSpent!: number;
    individualPosition!: string;
    inhibitorKills!: number;
    inhibitorTakedowns!: number;
    inhibitorsLost!: number;
    item0!: number;
    item1!: number;
    item2!: number;
    item3!: number;
    item4!: number;
    item5!: number;
    item6!: number;
    itemsPurchased!: number;
    killingSprees!: number;
    kills!: number;
    lane!: string;
    largestCriticalStrike!: number;
    largestKillingSpree!: number;
    largestMultiKill!: number;
    longestTimeSpentLiving!: number;
    magicDamageDealt!: number;
    magicDamageDealtToChampions!: number;
    magicDamageTaken!: number;
    neutralMinionsKilled!: number;
    nexusKills!: number;
    nexusTakedowns!: number;
    nexusLost!: number;
    objectivesStolen!: number;
    objectivesStolenAssists!: number;
    participantId!: number;
    pentaKills!: number;
    perks!: Interfaces.Match.v5.IPerksDTO;
    physicalDamageDealt!: number;
    physicalDamageDealtToChampions!: number;
    physicalDamageTaken!: number;
    profileIcon!: number;
    puuid!: string;
    quadraKills!: number;
    riotIdName!: string;
    riotIdTagline!: string;
    role!: string;
    sightWardsBoughtInGame!: number;
    spell1Casts!: number;
    spell2Casts!: number;
    spell3Casts!: number;
    spell4Casts!: number;
    summoner1Casts!: number;
    summoner1Id!: number;
    summoner2Casts!: number;
    summoner2Id!: number;
    summonerId!: string;
    summonerLevel!: number;
    summonerName!: string;
    teamEarlySurrendered!: boolean;
    teamId!: number;
    teamPosition!: string;
    timeCCingOthers!: number;
    timePlayed!: number;
    totalDamageDealt!: number;
    totalDamageDealtToChampions!: number;
    totalDamageShieldedOnTeammates!: number;
    totalDamageTaken!: number;
    totalHeal!: number;
    totalHealsOnTeammates!: number;
    totalMinionsKilled!: number;
    totalTimeCCDealt!: number;
    totalTimeSpentDead!: number;
    totalUnitsHealed!: number;
    tripleKills!: number;
    trueDamageDealt!: number;
    trueDamageDealtToChampions!: number;
    trueDamageTaken!: number;
    turretKills!: number;
    turretTakedowns!: number;
    turretsLost!: number;
    unrealKills!: number;
    visionScore!: number;
    visionWardsBoughtInGame!: number;
    wardsKilled!: number;
    wardsPlaced!: number;
    win!: boolean;

}

export class PerksDTO implements Interfaces.Match.v5.IPerksDTO {
    statPerks!: Interfaces.Match.v5.IPerkStatsDTO;
    styles!: Array<Interfaces.Match.v5.IPerkStyleDTO>;
}

export class PerkStatsDTO implements Interfaces.Match.v5.IPerkStatsDTO {
    defense!: number;
    flex!: number;
    offense!: number;
}

export class PerkStyleDTO implements Interfaces.Match.v5.IPerkStyleDTO {
    description!: string;
    selections!: Array<Interfaces.Match.v5.IPerkStyleSelectionDTO>;
    style!: number;
}

export class PerkStyleSelectionDTO implements Interfaces.Match.v5.IPerkStyleSelectionDTO {
    perk!: number;
    var1!: number;
    var2!: number;
    var3!: number;
}

export class TeamDTO implements Interfaces.Match.v5.ITeamDTO {
    bans!: Array<Interfaces.Match.v5.IBanDTO>;
    objectives!: Interfaces.Match.v5.IObjectivesDTO;
    teamId!: number;
    win!: boolean;
}

export class BanDTO implements Interfaces.Match.v5.IBanDTO {
    championId!: number;
    pickTurn!: number;
}

export class ObjectivesDTO implements Interfaces.Match.v5.IObjectivesDTO {
    baron!: Interfaces.Match.v5.IObjectiveDTO;
    champion!: Interfaces.Match.v5.IObjectiveDTO;
    dragon!: Interfaces.Match.v5.IObjectiveDTO;
    inhibitor!: Interfaces.Match.v5.IObjectiveDTO;
    riftHerald!: Interfaces.Match.v5.IObjectiveDTO;
    tower!: Interfaces.Match.v5.IObjectiveDTO;
}

export class ObjectiveDTO implements Interfaces.Match.v5.IObjectiveDTO {
    first!: boolean;
    kills!: number;
}
