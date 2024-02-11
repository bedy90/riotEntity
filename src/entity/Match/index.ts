import * as Matches from './v5/MatchDTO';
// import * as MatchTL from './v5/MatchTimelineDTO';

export namespace Match {
    export namespace v5 {
        export import BanDTO = Matches.BanDTO;
        export import InfoDTO = Matches.InfoDTO;
        export import MatchDTO = Matches.MatchDTO;

        export import MetadataDTO = Matches.MetadataDTO;
        export import ObjectiveDTO = Matches.ObjectiveDTO;
        export import ObjectivesDTO = Matches.ObjectivesDTO;

        export import ParticipantDTO = Matches.ParticipantDTO;
        export import PerkStatsDTO = Matches.PerkStatsDTO;
        export import PerkStyleDTO = Matches.PerkStyleDTO;

        export import PerkStyleSelectionDTO = Matches.PerkStyleSelectionDTO;
        export import PerksDTO = Matches.PerksDTO;
        export import TeamDTO = Matches.TeamDTO;
    }
}
