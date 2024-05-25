import * as LeagueEntryInterface from './v4/ILeagueEntryDTO';
import * as LeagueListInterface from './v4/ILeagueListDTO';
import * as MiniSeriesInterface from './v4/IMiniSeriesDTO';
import * as LeagueListItemInterface from './v4/ILeagueItemDTO';

export namespace League {
    export namespace v4 {
        export import ILeagueEntryDTO = LeagueEntryInterface.ILeagueEntryDTO;

        export import ILeagueItemDTO = LeagueListItemInterface.ILeagueItemDTO;
        export import ILeagueListDTO = LeagueListInterface.ILeagueListDTO;

        export import IMiniSeriesDTO = MiniSeriesInterface.IMiniSeriesDTO;
    }
}

