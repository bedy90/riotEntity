import * as MiniSeriesDTOInterface from './v1/IMiniSeriesDTO';
import * as LeagueListDTOInterface from './v1/ILeagueListDTO';
import * as LeagueItemDTOInterface from './v1/ILeagueItemDTO';
import * as LeagueEntryDTOInterface from './v1/ILeagueEntryDTO';

export namespace TFT_League {
  export namespace v1 {
    export import IMiniSeriesDTO = MiniSeriesDTOInterface.IMiniSeriesDTO;
    export import ILeagueListDTO = LeagueListDTOInterface.ILeagueListDTO;
    export import ILeagueItemDTO = LeagueItemDTOInterface.ILeagueItemDTO;
    export import ILeagueEntryDTO = LeagueEntryDTOInterface.ILeagueEntryDTO;
  }
}
