import * as MiniSeriesDTOInterface from './v4/IMiniSeriesDTO';
import * as LeagueListDTOInterface from './v4/ILeagueListDTO';
import * as LeagueItemDTOInterface from './v4/ILeagueItemDTO';
import * as LeagueEntryDTOInterface from './v4/ILeagueEntryDTO';

export namespace League {
  export namespace v4 {
    export import IMiniSeriesDTO = MiniSeriesDTOInterface.IMiniSeriesDTO;
    export import ILeagueListDTO = LeagueListDTOInterface.ILeagueListDTO;
    export import ILeagueItemDTO = LeagueItemDTOInterface.ILeagueItemDTO;
    export import ILeagueEntryDTO = LeagueEntryDTOInterface.ILeagueEntryDTO;
  }
}
