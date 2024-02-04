import * as Player from './v1/PlayerDTO';
import * as Team from './v1/TeamDTO';
import * as Tournament from './v1/TournamentDTO';

export namespace Clash {
    export namespace v1 {
        export import PlayerDTO = Player.PlayerDTO;
        export import TeamDTO = Team.TeamDTO;
        export import TournamentDTO = Tournament.TournamentDTO;
        export import TournamentPhaseDTO = Tournament.TournamentPhaseDTO;
    }
}
