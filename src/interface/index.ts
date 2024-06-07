// Export All
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

export * from './LOL_Status/v4/IStatus';

export * from './Match/v5/IMatchDTO';
// @NotImplemented
// export * from './Match/v5/IMatchTimelineDTO';
export * from './Match/v5/IPerksDTO';

export * from './Spectactor/v4/ICurrentGameInfo';
export * from './Spectactor/v4/IFeaturedGames';

export * from './Summoner/v4/ISummonerDTO';

export { ILeagueEntryDTO as TFT_ILeagueEntryDTO } from './TFT_League/v1/ILeagueEntryDTO';
export { ILeagueListDTO as TFT_ILeagueListDTO } from './TFT_League/v1/ILeagueListDTO';
export { IMiniSeriesDTO as TFT_IMiniSeriesDTO } from './TFT_League/v1/IMiniSeriesDTO';

export { ICompanionDTO as TFT_ICompanionDTO } from './TFT_Match/v1/IMatchDTO';
export { IInfoDTO as TFT_IInfoDTO } from './TFT_Match/v1/IMatchDTO';
export { IMatchDTO as TFT_IMatchDTO } from './TFT_Match/v1/IMatchDTO';
export { IMetadataDTO as TFT_IMetadataDTO } from './TFT_Match/v1/IMatchDTO';
export { IParticipantDTO as TFT_IParticipantDTO } from './TFT_Match/v1/IMatchDTO';
export { ITraitDTO as TFT_ITraitDTO } from './TFT_Match/v1/IMatchDTO';
export { IUnitDTO as TFT_IUnitDTO } from './TFT_Match/v1/IMatchDTO';

export  { ICurrentGameInfo as TFT_ICurrentGameInfo } from './TFT_Spectactor/v5/ICurrentGameInfo';
export  { ICurrentGameParticipant as TFT_ICurrentGameParticipant } from './TFT_Spectactor/v5/ICurrentGameInfo';
export  { IGameCustomizationObject as TFT_IGameCustomizationObject } from './TFT_Spectactor/v5/ICurrentGameInfo';
export  { IPerks as TFT_IPerks } from './TFT_Spectactor/v5/ICurrentGameInfo';
export  { IBannedChampion as TFT_IBannedChampion } from './TFT_Spectactor/v5/IFeaturedGames';
export  { IFeaturedGameInfo as TFT_IFeaturedGameInfo } from './TFT_Spectactor/v5/IFeaturedGames';
export  { IFeaturedGames as TFT_IFeaturedGames } from './TFT_Spectactor/v5/IFeaturedGames';
export  { IObserver as TFT_IObserver } from './TFT_Spectactor/v5/IFeaturedGames';
export  { IParticipant as TFT_IParticipant } from './TFT_Spectactor/v5/IFeaturedGames';

export { IContentDTO as TFT_IContentDTO } from './TFT_Status/v1/IStatus';
export { IPlatformDataDTO as TFT_IPlatformDataDTO } from './TFT_Status/v1/IStatus';
export { IStatusDTO as TFT_IStatusDTO } from './TFT_Status/v1/IStatus';
export { IUpdateDTO as TFT_IUpdateDTO } from './TFT_Status/v1/IStatus';

export { ISummonerDTO as TFT_ISummonerDTO } from './TFT_Summoner/v1/ISummonerDTO';