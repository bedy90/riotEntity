import * as PlayerCheck from './v1/PlayerChecker';
import * as TeamCheck from './v1/TeamChecker';
import * as TournamentCheck from './v1/TournamentChecker';

export namespace Clash {
    export namespace v1 {
        export import isIPlayerDTO = PlayerCheck.isIPlayerDTO;
        export import isITeamDTO = TeamCheck.isITeamDTO
        export import isITournamentDTO = TournamentCheck.isITournamentDTO;
        export import isITournamentPhaseDTO = TournamentCheck.isITournamentPhaseDTO;
    }
}
