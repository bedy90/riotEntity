import * as MatchInterface from './v5/IMatchDTO';
import * as TimeLineInterface from './v5/IMatchTimelineDTO';
import * as PerksInterface from './v5/IPerksDTO';

export namespace Match {
    export namespace v5 {
        export import IBanDTO = MatchInterface.IBanDTO;
        export import IInfoDTO = MatchInterface.IInfoDTO;
        export import IMatchDTO = MatchInterface.IMatchDTO;
        export import IMetadataDTO = MatchInterface.IMetadataDTO;
        export import IObjectiveDTO = MatchInterface.IObjectiveDTO;
        export import IObjectivesDTO = MatchInterface.IObjectivesDTO;
        export import IParticipantDTO = MatchInterface.IParticipantDTO;
        export import ITeamDTO = MatchInterface.ITeamDTO;

        export import IPerkStatsDTO = PerksInterface.IPerkStatsDTO;
        export import IPerkStyleDTO = PerksInterface.IPerkStyleDTO;
        export import IPerkStyleSelectionDTO = PerksInterface.IPerkStyleSelectionDTO;
        export import IPerksDTO = PerksInterface.IPerksDTO;
    
        export import IMatchTimelineDto = TimeLineInterface.IMatchTimelineDto;
    }
}