export * from './Account';
export * from './Champion';
export * from './ChampionMasteries';
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
export * from './TFT_Status';
export * from './TFT_Summoner';

// Current version
export * from './Account/v1/IAccountDTO';
export * from './Champion/v3/IChampionInfo';
export * from './ChampionMasteries/v4/IChampionMasteryDTO';
export { IPlayerDTO as IClashPlayerDTO } from './Clash/v1/IPlayerDTO';
export { ITeamDTO as IClashTeamDTO } from './Clash/v1/ITeamDTO';
export * from './Clash/v1/ITournamentDTO';

export * from './League/v4/ILeagueEntryDTO';
export * from './League/v4/ILeagueListDTO';
// export * from './League/v4/IPlayerInfoDTO';
export { ILeagueEntryDTO as LeagueExp_ILeagueEntryDTO } from './LeagueExp/v4/ILeagueEntryDTO';
export { IMiniSeriesDTO as LeagueExp_IMiniSeriesDTO } from './LeagueExp/v4/IMiniSeriesDTO';
export * from './LOL_Challenges/v1/IApexPlayerInfoDTO';
export * from './LOL_Challenges/v1/IChallengeConfigInfoDTO';
export * from './LOL_Status/v4/IStatus';
export * from './Match/v5/IMatchDTO';
export * from './Match/v5/IMatchTimelineDTO';
export * from './Spectactor/v4/ICurrentGameInfo';
export * from './Spectactor/v4/IFeaturedGames';
export * from './Summoner/v4/ISummonerDTO';

export { ILeagueEntryDTO as TFT_ILeagueEntryDTO } from './TFT_League/v1/ILeagueEntryDTO';
export { ILeagueListDTO as TFT_ILeagueListDTO } from './TFT_League/v1/ILeagueListDTO';
export { IMiniSeriesDTO as TFT_IMiniSeriesDTO } from './TFT_League/v1/IMiniSeriesDTO';
export { IMatchDTO as TFT_IMatchDTO } from './TFT_Match/v1/IMatchDTO';
export { IContentDTO as TFT_IContentDTO } from './TFT_Status/v1/IStatus';
export { IPlatformDataDTO as TFT_IPlatformDataDTO } from './TFT_Status/v1/IStatus';
export { IStatusDTO as TFT_IStatusDTO } from './TFT_Status/v1/IStatus';
export { IUpdateDTO as TFT_IUpdateDTO } from './TFT_Status/v1/IStatus';

export { ISummonerDTO as TFT_ISummonerDTO } from './TFT_Summoner/v1/ISummonerDTO';
