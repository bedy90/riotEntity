import * as LeagueEntryInterface from './v1/ILeagueEntryDTO';
import * as LeagueListInterface from './v1/ILeagueListDTO';
import * as MiniSeriesInterface from './v1/IMiniSeriesDTO';

export namespace TFT_League {
    export namespace v1 {
        export import ILeagueEntryDTO = LeagueEntryInterface.ILeagueEntryDTO;

        export import ILeagueItemDTO = LeagueListInterface.ILeagueItemDTO;
        export import ILeagueListDTO = LeagueListInterface.ILeagueListDTO;
        
        export import IMiniSeriesDTO = MiniSeriesInterface.IMiniSeriesDTO;
    }
}

