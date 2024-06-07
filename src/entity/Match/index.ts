import * as Ban from './v5/BanDTO';
import * as Info from './v5/InfoDTO';
import * as Matches from './v5/MatchDTO';
import * as Metadata from './v5/MetadataDTO';
import * as Objective from './v5/ObjectiveDTO';
import * as Objectives from './v5/ObjectivesDTO';
import * as Participant from './v5/ParticipantDTO';
import * as Perks from './v5/PerksDTO';
import * as PerkStats from './v5/PerkStatsDTO';
import * as PerkStyle from './v5/PerkStyleDTO';
import * as PerkStyleSelection from './v5/PerkStyleSelectionDTO';
import * as Team from './v5/TeamDTO';



export namespace Match {
    export namespace v5 {
        export import BanDTO = Ban.BanDTO;
        export import InfoDTO = Info.InfoDTO;
        export import MatchDTO = Matches.MatchDTO;

        export import MetadataDTO = Metadata.MetadataDTO;
        export import ObjectiveDTO = Objective.ObjectiveDTO;
        export import ObjectivesDTO = Objectives.ObjectivesDTO;

        export import ParticipantDTO = Participant.ParticipantDTO;
       
        export import PerksDTO = Perks.PerksDTO;
        export import PerkStatsDTO = PerkStats.PerkStatsDTO;
        export import PerkStyleDTO = PerkStyle.PerkStyleDTO;
        export import PerkStyleSelectionDTO = PerkStyleSelection.PerkStyleSelectionDTO;
        
        export import TeamDTO = Team.TeamDTO;
     

    }
}
