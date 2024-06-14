import * as LeagueEntryCheck from './v4/LeagueEntryChecker';
import * as LeagueListCheck from './v4/LeagueListChecker';
import * as LeagueItemChecker from './v4/LeagueItemChecker';
import * as MiniSeriesChecker from './v4/MiniSeriesChecker';
// export * from './v4/PlayerInfoDTO';

export namespace League {
    export namespace v4 {
        export import isILeagueEntryDTO = LeagueEntryCheck.isILeagueEntryDTO;

        export import isILeagueItemDTO = LeagueItemChecker.isILeagueItemDTO;
        export import isILeagueListDTO = LeagueListCheck.isILeagueListDTO;

        export import isIMiniSeriesDTO = MiniSeriesChecker.isIMiniSeriesDTO;
    }
}