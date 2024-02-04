import * as LeagueEntry from './v4/LeagueEntryDTO';
import * as LeagueList from './v4/LeagueListDTO';
// export * from './v4/PlayerInfoDTO';

export namespace League {
    export namespace v4 {
        export import LeagueEntryDTO = LeagueEntry.LeagueEntryDTO;

        export import LeagueListDTO = LeagueList.LeagueListDTO;
        export import LeagueItemDTO = LeagueList.LeagueItemDTO;
        export import MiniSeriesDTO = LeagueList.MiniSeriesDTO;
    }
}