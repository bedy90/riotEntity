import * as TournamentPhaseDTOInterface from './v1/ITournamentPhaseDTO';
import * as TournamentDTOInterface from './v1/ITournamentDTO';
import * as TeamDTOInterface from './v1/ITeamDTO';
import * as PlayerDTOInterface from './v1/IPlayerDTO';

export namespace Clash {
  export namespace v1 {
    export import ITournamentPhaseDTO = TournamentPhaseDTOInterface.ITournamentPhaseDTO;
    export import ITournamentDTO = TournamentDTOInterface.ITournamentDTO;
    export import ITeamDTO = TeamDTOInterface.ITeamDTO;
    export import IPlayerDTO = PlayerDTOInterface.IPlayerDTO;
  }
}
