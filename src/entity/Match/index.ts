import * as Matches from './v5/MatchDTO';
import * as Perks from './v5/PerksDTO';
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
        export import TeamDTO = Matches.TeamDTO;

        export import PerkStatsDTO = Perks.PerkStatsDTO;
        export import PerkStyleDTO = Perks.PerkStyleDTO;
        export import PerkStyleSelectionDTO = Perks.PerkStyleSelectionDTO;
        export import PerksDTO = Perks.PerksDTO;

    }
}
