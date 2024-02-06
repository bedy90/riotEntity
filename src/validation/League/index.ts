import * as LeagueEntryCheck from './v4/LeagueEntryChecker';
import * as LeagueListCheck from './v4/LeagueListChecker';
// export * from './v4/PlayerInfoDTO';

export namespace League {
    export namespace v4 {
        export import isILeagueEntryDTO = LeagueEntryCheck.isILeagueEntryDTO;

        export import isILeagueItemDTO = LeagueListCheck.isILeagueItemDTO;
        export import isILeagueListDTO = LeagueListCheck.isILeagueListDTO;
        export import isILeagueEntryDisIMiniSeriesDTOTO = LeagueListCheck.isIMiniSeriesDTO;
    }
}