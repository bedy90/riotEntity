import * as TournamentPhaseDTOCls from './v1/TournamentPhaseDTO';
import * as TournamentDTOCls from './v1/TournamentDTO';
import * as TeamDTOCls from './v1/TeamDTO';
import * as PlayerDTOCls from './v1/PlayerDTO';

export namespace Clash {
  export namespace v1 {
    export import TournamentPhaseDTO = TournamentPhaseDTOCls.TournamentPhaseDTO;
    export import TournamentDTO = TournamentDTOCls.TournamentDTO;
    export import TeamDTO = TeamDTOCls.TeamDTO;
    export import PlayerDTO = PlayerDTOCls.PlayerDTO;
  }
}
