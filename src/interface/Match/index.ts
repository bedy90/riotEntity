import * as MatchInterface from './v5/IMatchDTO';
import * as TimeLineinterface from './v5/IMatchTimelineDTO';

export namespace Match {
    export namespace v5 {
        export import IBanDTO = MatchInterface.IBanDTO;
        export import IInfoDTO = MatchInterface.IInfoDTO;
        export import IMatchDTO = MatchInterface.IMatchDTO;
        export import IMetadataDTO = MatchInterface.IMetadataDTO;
        export import IObjectiveDTO = MatchInterface.IObjectiveDTO;
        export import IObjectivesDTO = MatchInterface.IObjectivesDTO;
        export import IParticipantDTO = MatchInterface.IParticipantDTO;
        export import IPerkStatsDTO = MatchInterface.IPerkStatsDTO;
        export import IPerkStyleDTO = MatchInterface.IPerkStyleDTO;
        export import IPerkStyleSelectionDTO = MatchInterface.IPerkStyleSelectionDTO;
        export import IPerksDTO = MatchInterface.IPerksDTO;
        export import ITeamDTO = MatchInterface.ITeamDTO;

        export import IMatchTimelineDto = TimeLineinterface.IMatchTimelineDto;
    }
}