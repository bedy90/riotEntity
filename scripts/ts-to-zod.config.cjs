/**
  * ts-to-zod configuration.
  *
  * @type {import("ts-to-zod").TsToZodConfig}
  */
 module.exports = [
  {
    "name": "AccountSchema",
    "input": "src/interface/Account/v1/IAccountDTO.ts",
    "output": "generate/schema/Account/v1/AccountSchema.zod.ts"
  },
  {
    "name": "AccountRegionSchema",
    "input": "src/interface/Account/v1/IAccountRegionDTO.ts",
    "output": "generate/schema/Account/v1/AccountRegionSchema.zod.ts"
  },
  {
    "name": "ActiveShardSchema",
    "input": "src/interface/Account/v1/IActiveShardDTO.ts",
    "output": "generate/schema/Account/v1/ActiveShardSchema.zod.ts"
  },
  {
    "name": "ChampionInfoSchema",
    "input": "src/interface/Champion/v3/IChampionInfo.ts",
    "output": "generate/schema/Champion/v3/ChampionInfoSchema.zod.ts"
  },
  {
    "name": "ChampionMasterySchema",
    "input": "src/interface/ChampionMastery/v4/IChampionMasteryDTO.ts",
    "output": "generate/schema/ChampionMastery/v4/ChampionMasterySchema.zod.ts"
  },
  {
    "name": "NextSeasonMilestonesSchema",
    "input": "src/interface/ChampionMastery/v4/INextSeasonMilestonesDTO.ts",
    "output": "generate/schema/ChampionMastery/v4/NextSeasonMilestonesSchema.zod.ts"
  },
  {
    "name": "RewardConfigSchema",
    "input": "src/interface/ChampionMastery/v4/IRewardConfigDTO.ts",
    "output": "generate/schema/ChampionMastery/v4/RewardConfigSchema.zod.ts"
  },
  {
    "name": "PlayerSchema",
    "input": "src/interface/Clash/v1/IPlayerDTO.ts",
    "output": "generate/schema/Clash/v1/PlayerSchema.zod.ts"
  },
  {
    "name": "TeamSchema",
    "input": "src/interface/Clash/v1/ITeamDTO.ts",
    "output": "generate/schema/Clash/v1/TeamSchema.zod.ts"
  },
  {
    "name": "TournamentSchema",
    "input": "src/interface/Clash/v1/ITournamentDTO.ts",
    "output": "generate/schema/Clash/v1/TournamentSchema.zod.ts"
  },
  {
    "name": "TournamentPhaseSchema",
    "input": "src/interface/Clash/v1/ITournamentPhaseDTO.ts",
    "output": "generate/schema/Clash/v1/TournamentPhaseSchema.zod.ts"
  },
  {
    "name": "LeagueEntrySchema",
    "input": "src/interface/League/v4/ILeagueEntryDTO.ts",
    "output": "generate/schema/League/v4/LeagueEntrySchema.zod.ts"
  },
  {
    "name": "LeagueItemSchema",
    "input": "src/interface/League/v4/ILeagueItemDTO.ts",
    "output": "generate/schema/League/v4/LeagueItemSchema.zod.ts"
  },
  {
    "name": "LeagueListSchema",
    "input": "src/interface/League/v4/ILeagueListDTO.ts",
    "output": "generate/schema/League/v4/LeagueListSchema.zod.ts"
  },
  {
    "name": "MiniSeriesSchema",
    "input": "src/interface/League/v4/IMiniSeriesDTO.ts",
    "output": "generate/schema/League/v4/MiniSeriesSchema.zod.ts"
  },
  {
    "name": "LeagueEntrySchema",
    "input": "src/interface/LeagueExp/v4/ILeagueEntryDTO.ts",
    "output": "generate/schema/LeagueExp/v4/LeagueEntrySchema.zod.ts"
  },
  {
    "name": "MiniSeriesSchema",
    "input": "src/interface/LeagueExp/v4/IMiniSeriesDTO.ts",
    "output": "generate/schema/LeagueExp/v4/MiniSeriesSchema.zod.ts"
  },
  {
    "name": "ApexPlayerInfoSchema",
    "input": "src/interface/LOL_Challenges/v1/IApexPlayerInfoDTO.ts",
    "output": "generate/schema/LOL_Challenges/v1/ApexPlayerInfoSchema.zod.ts"
  },
  {
    "name": "ChallengeConfigInfoSchema",
    "input": "src/interface/LOL_Challenges/v1/IChallengeConfigInfoDTO.ts",
    "output": "generate/schema/LOL_Challenges/v1/ChallengeConfigInfoSchema.zod.ts"
  },
  {
    "name": "ChallengesTypeSchema",
    "input": "src/interface/LOL_Challenges/v1/IChallengesType.ts",
    "output": "generate/schema/LOL_Challenges/v1/ChallengesTypeSchema.zod.ts"
  },
  {
    "name": "PlayerInfoSchema",
    "input": "src/interface/LOL_Challenges/v1/IPlayerInfoDTO.ts",
    "output": "generate/schema/LOL_Challenges/v1/PlayerInfoSchema.zod.ts"
  },
  {
    "name": "ContentSchema",
    "input": "src/interface/LOL_Status/v4/IContentDTO.ts",
    "output": "generate/schema/LOL_Status/v4/ContentSchema.zod.ts"
  },
  {
    "name": "PlatformDataSchema",
    "input": "src/interface/LOL_Status/v4/IPlatformDataDTO.ts",
    "output": "generate/schema/LOL_Status/v4/PlatformDataSchema.zod.ts"
  },
  {
    "name": "StatusSchema",
    "input": "src/interface/LOL_Status/v4/IStatusDTO.ts",
    "output": "generate/schema/LOL_Status/v4/StatusSchema.zod.ts"
  },
  {
    "name": "UpdateSchema",
    "input": "src/interface/LOL_Status/v4/IUpdateDTO.ts",
    "output": "generate/schema/LOL_Status/v4/UpdateSchema.zod.ts"
  },
  {
    "name": "BanSchema",
    "input": "src/interface/Match/v5/IBanDTO.ts",
    "output": "generate/schema/Match/v5/BanSchema.zod.ts"
  },
  {
    "name": "ChallengesSchema",
    "input": "src/interface/Match/v5/IChallengesDTO.ts",
    "output": "generate/schema/Match/v5/ChallengesSchema.zod.ts"
  },
  {
    "name": "InfoSchema",
    "input": "src/interface/Match/v5/IInfoDTO.ts",
    "output": "generate/schema/Match/v5/InfoSchema.zod.ts"
  },
  {
    "name": "MatchSchema",
    "input": "src/interface/Match/v5/IMatchDTO.ts",
    "output": "generate/schema/Match/v5/MatchSchema.zod.ts"
  },
  {
    "name": "MatchIdsSchema",
    "input": "src/interface/Match/v5/IMatchIds.ts",
    "output": "generate/schema/Match/v5/MatchIdsSchema.zod.ts"
  },
  {
    "name": "MatchTimelineSchema",
    "input": "src/interface/Match/v5/IMatchTimelineDTO.ts",
    "output": "generate/schema/Match/v5/MatchTimelineSchema.zod.ts"
  },
  {
    "name": "MetadataSchema",
    "input": "src/interface/Match/v5/IMetadataDTO.ts",
    "output": "generate/schema/Match/v5/MetadataSchema.zod.ts"
  },
  {
    "name": "MissionsSchema",
    "input": "src/interface/Match/v5/IMissionsDTO.ts",
    "output": "generate/schema/Match/v5/MissionsSchema.zod.ts"
  },
  {
    "name": "ObjectiveSchema",
    "input": "src/interface/Match/v5/IObjectiveDTO.ts",
    "output": "generate/schema/Match/v5/ObjectiveSchema.zod.ts"
  },
  {
    "name": "ObjectivesSchema",
    "input": "src/interface/Match/v5/IObjectivesDTO.ts",
    "output": "generate/schema/Match/v5/ObjectivesSchema.zod.ts"
  },
  {
    "name": "ParticipantSchema",
    "input": "src/interface/Match/v5/IParticipantDTO.ts",
    "output": "generate/schema/Match/v5/ParticipantSchema.zod.ts"
  },
  {
    "name": "PerksSchema",
    "input": "src/interface/Match/v5/IPerksDTO.ts",
    "output": "generate/schema/Match/v5/PerksSchema.zod.ts"
  },
  {
    "name": "PerkStatsSchema",
    "input": "src/interface/Match/v5/IPerkStatsDTO.ts",
    "output": "generate/schema/Match/v5/PerkStatsSchema.zod.ts"
  },
  {
    "name": "PerkStyleSchema",
    "input": "src/interface/Match/v5/IPerkStyleDTO.ts",
    "output": "generate/schema/Match/v5/PerkStyleSchema.zod.ts"
  },
  {
    "name": "PerkStyleSelectionSchema",
    "input": "src/interface/Match/v5/IPerkStyleSelectionDTO.ts",
    "output": "generate/schema/Match/v5/PerkStyleSelectionSchema.zod.ts"
  },
  {
    "name": "TeamSchema",
    "input": "src/interface/Match/v5/ITeamDTO.ts",
    "output": "generate/schema/Match/v5/TeamSchema.zod.ts"
  },
  {
    "name": "TimelineSchema",
    "input": "src/interface/Match/v5/ITimelineDTO.ts",
    "output": "generate/schema/Match/v5/TimelineSchema.zod.ts"
  },
  {
    "name": "BannedChampionSchema",
    "input": "src/interface/Spectactor/v4/IBannedChampion.ts",
    "output": "generate/schema/Spectactor/v4/BannedChampionSchema.zod.ts"
  },
  {
    "name": "CurrentGameInfoSchema",
    "input": "src/interface/Spectactor/v4/ICurrentGameInfo.ts",
    "output": "generate/schema/Spectactor/v4/CurrentGameInfoSchema.zod.ts"
  },
  {
    "name": "CurrentGameParticipantSchema",
    "input": "src/interface/Spectactor/v4/ICurrentGameParticipant.ts",
    "output": "generate/schema/Spectactor/v4/CurrentGameParticipantSchema.zod.ts"
  },
  {
    "name": "FeaturedGameInfoSchema",
    "input": "src/interface/Spectactor/v4/IFeaturedGameInfo.ts",
    "output": "generate/schema/Spectactor/v4/FeaturedGameInfoSchema.zod.ts"
  },
  {
    "name": "FeaturedGamesSchema",
    "input": "src/interface/Spectactor/v4/IFeaturedGames.ts",
    "output": "generate/schema/Spectactor/v4/FeaturedGamesSchema.zod.ts"
  },
  {
    "name": "GameCustomizationObjectSchema",
    "input": "src/interface/Spectactor/v4/IGameCustomizationObject.ts",
    "output": "generate/schema/Spectactor/v4/GameCustomizationObjectSchema.zod.ts"
  },
  {
    "name": "ObserverSchema",
    "input": "src/interface/Spectactor/v4/IObserver.ts",
    "output": "generate/schema/Spectactor/v4/ObserverSchema.zod.ts"
  },
  {
    "name": "ParticipantSchema",
    "input": "src/interface/Spectactor/v4/IParticipant.ts",
    "output": "generate/schema/Spectactor/v4/ParticipantSchema.zod.ts"
  },
  {
    "name": "PerksSchema",
    "input": "src/interface/Spectactor/v4/IPerks.ts",
    "output": "generate/schema/Spectactor/v4/PerksSchema.zod.ts"
  },
  {
    "name": "SummonerSchema",
    "input": "src/interface/Summoner/v4/ISummonerDTO.ts",
    "output": "generate/schema/Summoner/v4/SummonerSchema.zod.ts"
  },
  {
    "name": "LeagueEntrySchema",
    "input": "src/interface/TFT_League/v1/ILeagueEntryDTO.ts",
    "output": "generate/schema/TFT_League/v1/LeagueEntrySchema.zod.ts"
  },
  {
    "name": "LeagueItemSchema",
    "input": "src/interface/TFT_League/v1/ILeagueItemDTO.ts",
    "output": "generate/schema/TFT_League/v1/LeagueItemSchema.zod.ts"
  },
  {
    "name": "LeagueListSchema",
    "input": "src/interface/TFT_League/v1/ILeagueListDTO.ts",
    "output": "generate/schema/TFT_League/v1/LeagueListSchema.zod.ts"
  },
  {
    "name": "MiniSeriesSchema",
    "input": "src/interface/TFT_League/v1/IMiniSeriesDTO.ts",
    "output": "generate/schema/TFT_League/v1/MiniSeriesSchema.zod.ts"
  },
  {
    "name": "CompanionSchema",
    "input": "src/interface/TFT_Match/v1/ICompanionDTO.ts",
    "output": "generate/schema/TFT_Match/v1/CompanionSchema.zod.ts"
  },
  {
    "name": "InfoSchema",
    "input": "src/interface/TFT_Match/v1/IInfoDTO.ts",
    "output": "generate/schema/TFT_Match/v1/InfoSchema.zod.ts"
  },
  {
    "name": "MatchSchema",
    "input": "src/interface/TFT_Match/v1/IMatchDTO.ts",
    "output": "generate/schema/TFT_Match/v1/MatchSchema.zod.ts"
  },
  {
    "name": "MetadataSchema",
    "input": "src/interface/TFT_Match/v1/IMetadataDTO.ts",
    "output": "generate/schema/TFT_Match/v1/MetadataSchema.zod.ts"
  },
  {
    "name": "ParticipantSchema",
    "input": "src/interface/TFT_Match/v1/IParticipantDTO.ts",
    "output": "generate/schema/TFT_Match/v1/ParticipantSchema.zod.ts"
  },
  {
    "name": "TraitSchema",
    "input": "src/interface/TFT_Match/v1/ITraitDTO.ts",
    "output": "generate/schema/TFT_Match/v1/TraitSchema.zod.ts"
  },
  {
    "name": "UnitSchema",
    "input": "src/interface/TFT_Match/v1/IUnitDTO.ts",
    "output": "generate/schema/TFT_Match/v1/UnitSchema.zod.ts"
  },
  {
    "name": "BannedChampionSchema",
    "input": "src/interface/TFT_Spectactor/v5/IBannedChampion.ts",
    "output": "generate/schema/TFT_Spectactor/v5/BannedChampionSchema.zod.ts"
  },
  {
    "name": "CurrentGameInfoSchema",
    "input": "src/interface/TFT_Spectactor/v5/ICurrentGameInfo.ts",
    "output": "generate/schema/TFT_Spectactor/v5/CurrentGameInfoSchema.zod.ts"
  },
  {
    "name": "CurrentGameParticipantSchema",
    "input": "src/interface/TFT_Spectactor/v5/ICurrentGameParticipant.ts",
    "output": "generate/schema/TFT_Spectactor/v5/CurrentGameParticipantSchema.zod.ts"
  },
  {
    "name": "FeaturedGameInfoSchema",
    "input": "src/interface/TFT_Spectactor/v5/IFeaturedGameInfo.ts",
    "output": "generate/schema/TFT_Spectactor/v5/FeaturedGameInfoSchema.zod.ts"
  },
  {
    "name": "FeaturedGamesSchema",
    "input": "src/interface/TFT_Spectactor/v5/IFeaturedGames.ts",
    "output": "generate/schema/TFT_Spectactor/v5/FeaturedGamesSchema.zod.ts"
  },
  {
    "name": "GameCustomizationObjectSchema",
    "input": "src/interface/TFT_Spectactor/v5/IGameCustomizationObject.ts",
    "output": "generate/schema/TFT_Spectactor/v5/GameCustomizationObjectSchema.zod.ts"
  },
  {
    "name": "ObserverSchema",
    "input": "src/interface/TFT_Spectactor/v5/IObserver.ts",
    "output": "generate/schema/TFT_Spectactor/v5/ObserverSchema.zod.ts"
  },
  {
    "name": "ParticipantSchema",
    "input": "src/interface/TFT_Spectactor/v5/IParticipant.ts",
    "output": "generate/schema/TFT_Spectactor/v5/ParticipantSchema.zod.ts"
  },
  {
    "name": "PerksSchema",
    "input": "src/interface/TFT_Spectactor/v5/IPerks.ts",
    "output": "generate/schema/TFT_Spectactor/v5/PerksSchema.zod.ts"
  },
  {
    "name": "ContentSchema",
    "input": "src/interface/TFT_Status/v1/IContentDTO.ts",
    "output": "generate/schema/TFT_Status/v1/ContentSchema.zod.ts"
  },
  {
    "name": "PlatformDataSchema",
    "input": "src/interface/TFT_Status/v1/IPlatformDataDTO.ts",
    "output": "generate/schema/TFT_Status/v1/PlatformDataSchema.zod.ts"
  },
  {
    "name": "StatusSchema",
    "input": "src/interface/TFT_Status/v1/IStatusDTO.ts",
    "output": "generate/schema/TFT_Status/v1/StatusSchema.zod.ts"
  },
  {
    "name": "UpdateSchema",
    "input": "src/interface/TFT_Status/v1/IUpdateDTO.ts",
    "output": "generate/schema/TFT_Status/v1/UpdateSchema.zod.ts"
  },
  {
    "name": "SummonerSchema",
    "input": "src/interface/TFT_Summoner/v1/ISummonerDTO.ts",
    "output": "generate/schema/TFT_Summoner/v1/SummonerSchema.zod.ts"
  },
  {
    "name": "BannedChampion_GlobalSchema",
    "input": "src/interface/_Global/IBannedChampion_Global.ts",
    "output": "generate/schema/_Global/BannedChampion_GlobalSchema.zod.ts"
  },
  {
    "name": "Content_GlobalSchema",
    "input": "src/interface/_Global/IContentDTO_Global.ts",
    "output": "generate/schema/_Global/Content_GlobalSchema.zod.ts"
  },
  {
    "name": "CurrentGameInfo_GlobalSchema",
    "input": "src/interface/_Global/ICurrentGameInfo_Global.ts",
    "output": "generate/schema/_Global/CurrentGameInfo_GlobalSchema.zod.ts"
  },
  {
    "name": "CurrentGameParticipant_GlobalSchema",
    "input": "src/interface/_Global/ICurrentGameParticipant_Global.ts",
    "output": "generate/schema/_Global/CurrentGameParticipant_GlobalSchema.zod.ts"
  },
  {
    "name": "FeaturedGameInfo_GlobalSchema",
    "input": "src/interface/_Global/IFeaturedGameInfo_Global.ts",
    "output": "generate/schema/_Global/FeaturedGameInfo_GlobalSchema.zod.ts"
  },
  {
    "name": "FeaturedGames_GlobalSchema",
    "input": "src/interface/_Global/IFeaturedGames_Global.ts",
    "output": "generate/schema/_Global/FeaturedGames_GlobalSchema.zod.ts"
  },
  {
    "name": "GameCustomizationObject_GlobalSchema",
    "input": "src/interface/_Global/IGameCustomizationObject_Global.ts",
    "output": "generate/schema/_Global/GameCustomizationObject_GlobalSchema.zod.ts"
  },
  {
    "name": "LeagueEntry_GlobalSchema",
    "input": "src/interface/_Global/ILeagueEntryDTO_Global.ts",
    "output": "generate/schema/_Global/LeagueEntry_GlobalSchema.zod.ts"
  },
  {
    "name": "MiniSeries_GlobalSchema",
    "input": "src/interface/_Global/IMiniSeriesDTO_Global.ts",
    "output": "generate/schema/_Global/MiniSeries_GlobalSchema.zod.ts"
  },
  {
    "name": "Observer_GlobalSchema",
    "input": "src/interface/_Global/IObserver_Global.ts",
    "output": "generate/schema/_Global/Observer_GlobalSchema.zod.ts"
  },
  {
    "name": "Participant_GlobalSchema",
    "input": "src/interface/_Global/IParticipant_Global.ts",
    "output": "generate/schema/_Global/Participant_GlobalSchema.zod.ts"
  },
  {
    "name": "Perks_GlobalSchema",
    "input": "src/interface/_Global/IPerks_Global.ts",
    "output": "generate/schema/_Global/Perks_GlobalSchema.zod.ts"
  },
  {
    "name": "PlatformData_GlobalSchema",
    "input": "src/interface/_Global/IPlatformDataDTO_Global.ts",
    "output": "generate/schema/_Global/PlatformData_GlobalSchema.zod.ts"
  },
  {
    "name": "Status_GlobalSchema",
    "input": "src/interface/_Global/IStatusDTO_Global.ts",
    "output": "generate/schema/_Global/Status_GlobalSchema.zod.ts"
  },
  {
    "name": "Summoner_GlobalSchema",
    "input": "src/interface/_Global/ISummonerDTO_Global.ts",
    "output": "generate/schema/_Global/Summoner_GlobalSchema.zod.ts"
  },
  {
    "name": "Update_GlobalSchema",
    "input": "src/interface/_Global/IUpdateDTO_Global.ts",
    "output": "generate/schema/_Global/Update_GlobalSchema.zod.ts"
  }
];
 