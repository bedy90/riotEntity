import * as LeagueEntryCl from './v1/LeagueEntryDTO';
import * as LeagueListCl from './v1/LeagueListDTO';
import * as MiniSeriesCl from './v1/MiniSeriesDTO';
import * as LeagueListItemCl from './v1/LeagueItemDTO'

export namespace TFT_League {
    export namespace v1 {
        export import LeagueEntryDTO = LeagueEntryCl.LeagueEntryDTO;

        export import LeagueItemDTO = LeagueListItemCl.LeagueItemDTO;
        
        export import LeagueListDTO = LeagueListCl.LeagueListDTO;

        export import MiniSeriesDTO = MiniSeriesCl.MiniSeriesDTO;
    }
}

