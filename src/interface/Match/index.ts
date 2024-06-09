import * as TeamDTOInterface from './v5/ITeamDTO';
import * as PerkStyleSelectionDTOInterface from './v5/IPerkStyleSelectionDTO';
import * as PerkStyleDTOInterface from './v5/IPerkStyleDTO';
import * as PerkStatsDTOInterface from './v5/IPerkStatsDTO';
import * as PerksDTOInterface from './v5/IPerksDTO';
import * as ParticipantDTOInterface from './v5/IParticipantDTO';
import * as ObjectivesDTOInterface from './v5/IObjectivesDTO';
import * as ObjectiveDTOInterface from './v5/IObjectiveDTO';
import * as MetadataDTOInterface from './v5/IMetadataDTO';
import * as MatchDTOInterface from './v5/IMatchDTO';
import * as InfoDTOInterface from './v5/IInfoDTO';
import * as BanDTOInterface from './v5/IBanDTO';

export namespace Match {
  export namespace v5 {
    export import ITeamDTO = TeamDTOInterface.ITeamDTO;
    export import IPerkStyleSelectionDTO = PerkStyleSelectionDTOInterface.IPerkStyleSelectionDTO;
    export import IPerkStyleDTO = PerkStyleDTOInterface.IPerkStyleDTO;
    export import IPerkStatsDTO = PerkStatsDTOInterface.IPerkStatsDTO;
    export import IPerksDTO = PerksDTOInterface.IPerksDTO;
    export import IParticipantDTO = ParticipantDTOInterface.IParticipantDTO;
    export import IObjectivesDTO = ObjectivesDTOInterface.IObjectivesDTO;
    export import IObjectiveDTO = ObjectiveDTOInterface.IObjectiveDTO;
    export import IMetadataDTO = MetadataDTOInterface.IMetadataDTO;
    export import IMatchDTO = MatchDTOInterface.IMatchDTO;
    export import IInfoDTO = InfoDTOInterface.IInfoDTO;
    export import IBanDTO = BanDTOInterface.IBanDTO;
  }
}
