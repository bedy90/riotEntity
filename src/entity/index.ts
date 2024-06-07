// Namespace
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

// Current version
export * from './Account/v1/AccountDTO';
export * from './Champion/v3/ChampionInfo';
export * from './ChampionMastery/v4/ChampionMasteryDTO';

export { PlayerDTO as ClashPlayerDTO } from './Clash/v1/PlayerDTO';
export { TeamDTO as ClashTeamDTO } from './Clash/v1/TeamDTO';
export { TournamentDTO as TournamentDTO } from './Clash/v1/TournamentDTO';
export { TournamentPhaseDTO as TournamentPhaseDTO } from './Clash/v1/TournamentPhaseDTO';

export * from './League/v4/LeagueEntryDTO';
export * from './League/v4/LeagueItemDTO';
export * from './League/v4/LeagueListDTO';
export * from './League/v4/MiniSeriesDTO';

export { LeagueEntryDTO as Exp_LeagueEntryDTO }  from './LeagueExp/v4/LeagueEntryDTO';
export { MiniSeriesDTO as Exp_MiniSeriesDTO }  from './LeagueExp/v4/MiniSeriesDTO';

export * from './LOL_Challenges/v1/ApexPlayerInfoDTO';
export * from './LOL_Challenges/v1/ChallengeConfigInfoDTO';

export * from './LOL_Status/v4/ContentDTO';
export * from './LOL_Status/v4/PlatformDataDTO';
export * from './LOL_Status/v4/StatusDTO';
export * from './LOL_Status/v4/UpdateDTO';

export * from './Match/v5/BanDTO';
export * from './Match/v5/InfoDTO';
export * from './Match/v5/MatchDTO';
export * from './Match/v5/MetadataDTO';
export * from './Match/v5/ObjectiveDTO';
export * from './Match/v5/ObjectivesDTO';
export * from './Match/v5/ParticipantDTO';
export * from './Match/v5/PerksDTO';
export * from './Match/v5/PerkStatsDTO';
export * from './Match/v5/PerkStyleDTO';
export * from './Match/v5/PerkStyleSelectionDTO';
export * from './Match/v5/TeamDTO';

export * from './Spectactor/v4/BannedChampion';
export * from './Spectactor/v4/CurrentGameInfo';
export * from './Spectactor/v4/CurrentGameParticipant';
export * from './Spectactor/v4/FeaturedGameInfo';
export * from './Spectactor/v4/FeaturedGames';
export * from './Spectactor/v4/GameCustomizationObject';
export * from './Spectactor/v4/Observer';
export * from './Spectactor/v4/Participant';
export * from './Spectactor/v4/Perks';

export * from './Summoner/v4/SummonerDTO';

// TFT
export { LeagueEntryDTO as TFT_LeagueEntryDTO } from './TFT_League/v1/LeagueEntryDTO';
export { LeagueItemDTO as TFT_LeagueItemDTO } from './TFT_League/v1/LeagueItemDTO';
export { LeagueListDTO as TFT_LeagueListDTO } from './TFT_League/v1/LeagueListDTO';
export { MiniSeriesDTO as TFT_MiniSeriesDTO } from './TFT_League/v1/MiniSeriesDTO';

export { CompanionDTO as TFT_CompanionDTO } from './TFT_Match/v1/CompanionDTO';
export { InfoDTO as TFT_InfoDTO} from './TFT_Match/v1/InfoDTO';
export { MatchDTO as TFT_MatchDTO } from './TFT_Match/v1/MatchDTO';
export { MetadataDTO as TFT_MetadataDTO } from './TFT_Match/v1/MetadataDTO';
export { ParticipantDTO as TFT_ParticipantDTO } from './TFT_Match/v1/ParticipantDTO';
export { TraitDTO as TFT_TraitDTO } from './TFT_Match/v1/TraitDTO';
export { UnitDTO as TFT_UnitDTO } from './TFT_Match/v1/UnitDTO';

export { BannedChampion as TFT_BannedChampion } from './TFT_Spectactor/v5/BannedChampion';
export { CurrentGameInfo as TFT_CurrentGameInfo } from './TFT_Spectactor/v5/CurrentGameInfo';
export { CurrentGameParticipant as TFT_CurrentGameParticipant } from './TFT_Spectactor/v5/CurrentGameParticipant';
export { FeaturedGameInfo as TFT_FeaturedGameInfo } from './TFT_Spectactor/v5/FeaturedGameInfo';
export { FeaturedGames as TFT_FeaturedGames } from './TFT_Spectactor/v5/FeaturedGames';
export { GameCustomizationObject as TFT_GameCustomizationObject } from './TFT_Spectactor/v5/GameCustomizationObject';
export { Observer as TFT_Observer } from './TFT_Spectactor/v5/Observer';
export { Participant as TFT_Participant } from './TFT_Spectactor/v5/Participant';
export { Perks as TFT_Perks } from './TFT_Spectactor/v5/Perks';

export { ContentDTO as TFT_ContentDTO } from './TFT_Status/v1/ContentDTO';
export { PlatformDataDTO as TFT_PlatformDataDTO } from './TFT_Status/v1/PlatformDataDTO';
export { StatusDTO as TFT_StatusDTO } from './TFT_Status/v1/StatusDTO';
export { UpdateDTO as TFT_UpdateDTO } from './TFT_Status/v1/UpdateDTO';

export { SummonerDTO as TFT_SummonerDTO }  from './TFT_Summoner/v1/SummonerDTO';