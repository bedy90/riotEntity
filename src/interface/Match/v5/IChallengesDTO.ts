/**
 * Interface IChallengesDTO
 *
 * @namespace Match
 * @version v5
 * @name IChallengesDTO
 */
export interface IChallengesDTO_v5 {
    AssistStreakCount: number;

    baronBuffGoldAdvantageOverThreshold: number;

    controlWardTimeCoverageInRiverOrEnemyHalf: number;

    earliestBaron: number;

    earliestDragonTakedown: number;

    earliestElderDragon: number;

    earlyLaningPhaseGoldExpAdvantage: number;

    fasterSupportQuestCompletion: number;

    fastestLegendary: number;

    hadAfkTeammate: number;

    highestChampionDamage: number;

    highestCrowdControlScore: number;

    highestWardKills: number;

    junglerKillsEarlyJungle: number;

    killsOnLanersEarlyJungleAsJungler: number;

    laningPhaseGoldExpAdvantage: number;

    legendaryCount: number;

    maxCsAdvantageOnLaneOpponent: number;

    maxLevelLeadLaneOpponent: number;

    mostWardsDestroyedOneSweeper: number;

    mythicItemUsed: number;

    playedChampSelectPosition: number;

    soloTurretsLategame: number;

    takedownsFirst25Minutes: number;

    teleportTakedowns: number;

    thirdInhibitorDestroyedTime: number;

    threeWardsOneSweeperCount: number;

    visionScoreAdvantageLaneOpponent: number;

    InfernalScalePickup: number;

    fistBumpParticipation: number;

    voidMonsterKill: number;

    abilityUses: number;

    acesBefore15Minutes: number;

    alliedJungleMonsterKills: number;

    baronTakedowns: number;

    blastConeOppositeOpponentCount: number;

    bountyGold: number;

    buffsStolen: number;

    completeSupportQuestInTime: number;

    controlWardsPlaced: number;

    damagePerMinute: number;

    damageTakenOnTeamPercentage: number;

    dancedWithRiftHerald: number;

    deathsByEnemyChamps: number;

    dodgeSkillShotsSmallWindow: number;

    doubleAces: number;

    dragonTakedowns: number;

    legendaryItemUsed: number[];

    effectiveHealAndShielding: number;

    elderDragonKillsWithOpposingSoul: number;

    elderDragonMultikills: number;

    enemyChampionImmobilizations: number;

    enemyJungleMonsterKills: number;

    epicMonsterKillsNearEnemyJungler: number;

    epicMonsterKillsWithin30SecondsOfSpawn: number;

    epicMonsterSteals: number;

    epicMonsterStolenWithoutSmite: number;

    firstTurretKilled: number;

    firstTurretKilledTime: number;

    flawlessAces: number;

    fullTeamTakedown: number;

    gameLength: number;

    getTakedownsInAllLanesEarlyJungleAsLaner: number;

    goldPerMinute: number;

    hadOpenNexus: number;

    immobilizeAndKillWithAlly: number;

    initialBuffCount: number;

    initialCrabCount: number;

    jungleCsBefore10Minutes: number;

    junglerTakedownsNearDamagedEpicMonster: number;

    kda: number;

    killAfterHiddenWithAlly: number;

    killedChampTookFullTeamDamageSurvived: number;

    killingSprees: number;

    killParticipation: number;

    killsNearEnemyTurret: number;

    killsOnOtherLanesEarlyJungleAsLaner: number;

    killsOnRecentlyHealedByAramPack: number;

    killsUnderOwnTurret: number;

    killsWithHelpFromEpicMonster: number;

    knockEnemyIntoTeamAndKill: number;

    kTurretsDestroyedBeforePlatesFall: number;

    landSkillShotsEarlyGame: number;

    laneMinionsFirst10Minutes: number;

    lostAnInhibitor: number;

    maxKillDeficit: number;

    mejaisFullStackInTime: number;

    moreEnemyJungleThanOpponent: number;

    /**
     * This is an offshoot of the OneStone challenge. The code checks if a spell with the same instance ID does the final point of damage to at least 2 Champions.
     * It doesn't matter if they're enemies, but you cannot hurt your friends.
     */
    multiKillOneSpell: number;

    multikills: number;

    multikillsAfterAggressiveFlash: number;

    multiTurretRiftHeraldCount: number;

    outerTurretExecutesBefore10Minutes: number;

    outnumberedKills: number;

    outnumberedNexusKill: number;

    perfectDragonSoulsTaken: number;

    perfectGame: number;

    pickKillWithAlly: number;

    poroExplosions: number;

    quickCleanse: number;

    quickFirstTurret: number;

    quickSoloKills: number;

    riftHeraldTakedowns: number;

    saveAllyFromDeath: number;

    scuttleCrabKills: number;

    shortestTimeToAceFromFirstTakedown: number;

    skillshotsDodged: number;

    skillshotsHit: number;

    snowballsHit: number;

    soloBaronKills: number;

    SWARM_DefeatAatrox: number;

    SWARM_DefeatBriar: number;

    SWARM_DefeatMiniBosses: number;

    SWARM_EvolveWeapon: number;

    SWARM_Have3Passives: number;

    SWARM_KillEnemy: number;

    SWARM_PickupGold: number;

    SWARM_ReachLevel50: number;

    SWARM_Survive15Min: number;

    SWARM_WinWith5EvolvedWeapons: number;

    soloKills: number;

    stealthWardsPlaced: number;

    survivedSingleDigitHpCount: number;

    survivedThreeImmobilizesInFight: number;

    takedownOnFirstTurret: number;

    takedowns: number;

    takedownsAfterGainingLevelAdvantage: number;

    takedownsBeforeJungleMinionSpawn: number;

    takedownsFirstXMinutes: number;

    takedownsInAlcove: number;

    takedownsInEnemyFountain: number;

    teamBaronKills: number;

    teamDamagePercentage: number;

    teamElderDragonKills: number;

    teamRiftHeraldKills: number;

    tookLargeDamageSurvived: number;

    turretPlatesTaken: number;

    /**
     * Any player who damages a tower that is destroyed within 30 seconds of a Rift Herald charge will receive credit.
     * A player who does not damage the tower will not receive credit.
     */
    turretsTakenWithRiftHerald: number;

    turretTakedowns: number;

    twentyMinionsIn3SecondsCount: number;

    twoWardsOneSweeperCount: number;

    unseenRecalls: number;

    visionScorePerMinute: number;

    wardsGuarded: number;

    wardTakedowns: number;

    wardTakedownsBefore20M: number;
}
