export * from './Account';
export * from './Challenges';
export * from './Champion';
export * from './ChampionMasteries';
export * from './Clash';
export * from './League';
export * from './Match';
export * from './Spectactor';
export * from './Status';
export * from './Summoner';

// Current version
export * from './Account/v1/IAccountDTO'
export * from './Challenges/v1/IApexPlayerInfoDTO'
export * from './Challenges/v1/IChallengeConfigInfoDTO'
export * from './Champion/v3/IChampionInfo';
export * from './ChampionMasteries/v4/IChampionMasteryDTO';
export { IPlayerDTO as IClashPlayerDTO } from './Clash/v1/IPlayerDTO';
export { ITeamDTO as IClashTeamDTO } from './Clash/v1/ITeamDTO';
export * from './Clash/v1/ITournamentDTO';
export * from './League/v4/ILeagueEntryDTO';
export * from './League/v4/ILeagueListDTO';
// export * from './League/v4/IPlayerInfoDTO';
export * from './Match/v5/IMatchDTO';
export * from './Match/v5/IMatchTimelineDTO';
export * from './Spectactor/v4/ICurrentGameInfo';
export * from './Spectactor/v4/IFeaturedGames';
export * from './Status/v3/IShardStatus';
export * from './Summoner/v4/ISummonerDTO';