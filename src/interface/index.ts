// Export All
// export * as GlobalInterface from './_Global';

export * from './Account';
export * from './Champion';
export * from './ChampionMastery';
export * from './Clash';
export * from './League';
export * from './LeagueExp';
export * from './LOL_Challenges';
export * from './LOL_Status';
export * from './Match';
export * from './Spectactor';
export * from './Summoner';
export * from './TFT_League';
export * from './TFT_Match';
export * from './TFT_Spectactor';
export * from './TFT_Status';
export * from './TFT_Summoner';

// Export Current version
export * from './Account/v1/IAccountDTO';
// @NotImplemented
// export * from './Account/v1/IActiveShardDTO';

export * from './Champion/v3/IChampionInfo';

export * from './ChampionMastery/v4/IChampionMasteryDTO';

export { IPlayerDTO as IClashPlayerDTO } from './Clash/v1/IPlayerDTO';
export { ITeamDTO as IClashTeamDTO } from './Clash/v1/ITeamDTO';
export * from './Clash/v1/ITournamentDTO';
export * from './Clash/v1/ITournamentPhaseDTO';

export * from './League/v4/ILeagueEntryDTO';
export * from './League/v4/ILeagueItemDTO';
export * from './League/v4/ILeagueListDTO';
export * from './League/v4/IMiniSeriesDTO';
// export * from './League/v4/IPlayerInfoDTO';

export { ILeagueEntryDTO as LeagueExp_ILeagueEntryDTO } from './LeagueExp/v4/ILeagueEntryDTO';
export { IMiniSeriesDTO as LeagueExp_IMiniSeriesDTO } from './LeagueExp/v4/IMiniSeriesDTO';

export * from './LOL_Challenges/v1/IApexPlayerInfoDTO';
export * from './LOL_Challenges/v1/IChallengeConfigInfoDTO';
// @NotImplemented
// export * from './LOL_Challenges/v1/IChallengesType';
// @NotImplemented
// export * from './LOL_Challenges/v1/IPlayerInfoDTO';

export * from './LOL_Status/v4/IContentDTO';
export * from './LOL_Status/v4/IPlatformDataDTO';
export * from './LOL_Status/v4/IStatusDTO';
export * from './LOL_Status/v4/IUpdateDTO';

export * from './Match/v5/IBanDTO';
export * from './Match/v5/IInfoDTO';
export * from './Match/v5/IMatchDTO';
// @NotImplemented
// export * from './Match/v5/IMatchTimelineDTO';
export * from './Match/v5/IMetadataDTO';
export * from './Match/v5/IObjectiveDTO';
export * from './Match/v5/IObjectivesDTO';
export * from './Match/v5/IParticipantDTO';
export * from './Match/v5/IPerksDTO';
export * from './Match/v5/IPerkStatsDTO';
export * from './Match/v5/IPerkStyleDTO';
export * from './Match/v5/IPerkStyleSelectionDTO';
export * from './Match/v5/ITeamDTO';


export * from './Spectactor/v4/IBannedChampion';
export * from './Spectactor/v4/ICurrentGameInfo';
export * from './Spectactor/v4/ICurrentGameParticipant';
export * from './Spectactor/v4/IFeaturedGames';
export * from './Spectactor/v4/IFeaturedGameInfo';
export * from './Spectactor/v4/IGameCustomizationObject';
export * from './Spectactor/v4/IObserver';
export * from './Spectactor/v4/IParticipant';
export * from './Spectactor/v4/IPerks';

export * from './Summoner/v4/ISummonerDTO';

export { ILeagueEntryDTO as TFT_ILeagueEntryDTO } from './TFT_League/v1/ILeagueEntryDTO';
export { ILeagueListDTO as TFT_ILeagueListDTO } from './TFT_League/v1/ILeagueListDTO';
export { IMiniSeriesDTO as TFT_IMiniSeriesDTO } from './TFT_League/v1/IMiniSeriesDTO';

export { ICompanionDTO as TFT_ICompanionDTO } from './TFT_Match/v1/ICompanionDTO';
export { IInfoDTO as TFT_IInfoDTO } from './TFT_Match/v1/IInfoDTO';
export { IMatchDTO as TFT_IMatchDTO } from './TFT_Match/v1/IMatchDTO';
export { IMetadataDTO as TFT_IMetadataDTO } from './TFT_Match/v1/IMetadataDTO';
export { IParticipantDTO as TFT_IParticipantDTO } from './TFT_Match/v1/IParticipantDTO';
export { ITraitDTO as TFT_ITraitDTO } from './TFT_Match/v1/ITraitDTO';
export { IUnitDTO as TFT_IUnitDTO } from './TFT_Match/v1/IUnitDTO';

export { IBannedChampion as TFT_IBannedChampion } from './TFT_Spectactor/v5/IBannedChampion';
export { ICurrentGameInfo as TFT_ICurrentGameInfo } from './TFT_Spectactor/v5/ICurrentGameInfo';
export { ICurrentGameParticipant as TFT_ICurrentGameParticipant } from './TFT_Spectactor/v5/ICurrentGameParticipant';
export { IFeaturedGameInfo as TFT_IFeaturedGameInfo } from './TFT_Spectactor/v5/IFeaturedGameInfo';
export { IFeaturedGames as TFT_IFeaturedGames } from './TFT_Spectactor/v5/IFeaturedGames';
export { IGameCustomizationObject as TFT_IGameCustomizationObject } from './TFT_Spectactor/v5/IGameCustomizationObject';
export { IObserver as TFT_IObserver } from './TFT_Spectactor/v5/IObserver';
export { IParticipant as TFT_IParticipant } from './TFT_Spectactor/v5/IParticipant';
export { IPerks as TFT_IPerks } from './TFT_Spectactor/v5/IPerks';

export { IContentDTO as TFT_IContentDTO } from './TFT_Status/v1/IContentDTO';
export { IPlatformDataDTO as TFT_IPlatformDataDTO } from './TFT_Status/v1/IPlatformDataDTO';
export { IStatusDTO as TFT_IStatusDTO } from './TFT_Status/v1/IStatusDTO';
export { IUpdateDTO as TFT_IUpdateDTO } from './TFT_Status/v1/IUpdateDTO';

export { ISummonerDTO as TFT_ISummonerDTO } from './TFT_Summoner/v1/ISummonerDTO';