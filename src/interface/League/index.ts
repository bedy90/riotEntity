import * as LeagueEntryInterface from './v4/ILeagueEntryDTO';
import * as LeagueListInterface from './v4/ILeagueListDTO';

export namespace League {
    export namespace v4 {
        export import ILeagueEntryDTO = LeagueEntryInterface.ILeagueEntryDTO;

        export import ILeagueItemDTO = LeagueListInterface.ILeagueItemDTO;
        export import ILeagueListDTO = LeagueListInterface.ILeagueListDTO;
        export import IMiniSeriesDTO = LeagueListInterface.IMiniSeriesDTO;
    }
}

