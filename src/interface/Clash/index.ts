import * as PlayerInterface from './v1/IPlayerDTO';
import * as TeamInterface from './v1/ITeamDTO';
import * as TournamentInterface from './v1/ITournamentDTO';
import * as TournamentPhaseInterface from './v1/ITournamentPhaseDTO';
// export { PlayerDTO as ClashPlayerDTO } from './v1/IPlayerDTO';
// export { TeamDTO as ClashTeamDTO } from './v1/ITeamDTO';

export namespace Clash {
    export namespace v1 {
        export import IPlayerDTO = PlayerInterface.IPlayerDTO;

        export import ITeamDTO = TeamInterface.ITeamDTO;

        export import ITournamentDTO = TournamentInterface.ITournamentDTO;
        export import ITournamentPhaseDTO = TournamentPhaseInterface.ITournamentPhaseDTO;
    }
}