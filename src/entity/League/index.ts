import * as LeagueEntry from './v4/LeagueEntryDTO';
import * as LeagueList from './v4/LeagueListDTO';
import * as LeagueItem from './v4/LeagueItemDTO';
import * as MiniSeries from './v4/MiniSeriesDTO';

export namespace League {
    export namespace v4 {
        export import LeagueEntryDTO = LeagueEntry.LeagueEntryDTO;

        export import LeagueListDTO = LeagueList.LeagueListDTO;

        export import LeagueItemDTO = LeagueItem.LeagueItemDTO;

        export import MiniSeriesDTO = MiniSeries.MiniSeriesDTO;
    }
}