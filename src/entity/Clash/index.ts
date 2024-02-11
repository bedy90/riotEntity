import * as Player from './v1/PlayerDTO';
import * as Team from './v1/TeamDTO';
import * as Tournament from './v1/TournamentDTO';

export namespace Clash {
    export namespace v1 {
        export import ClashPlayerDTO = Player.PlayerDTO;
        export import ClashTeamDTO = Team.TeamDTO;
        export import ClashTournamentDTO = Tournament.TournamentDTO;
        export import ClashTournamentPhaseDTO = Tournament.TournamentPhaseDTO;
    }
}
