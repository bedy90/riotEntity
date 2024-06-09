import { Interfaces } from '@/riotentity';

/**
 * Class TournamentPhaseDTO
 *
 * @namespace Clash
 * @version v1
 * @name ITournamentPhaseDTO
 */
export class TournamentPhaseDTO implements Interfaces.Clash.v1.ITournamentPhaseDTO {
    id!: number;
    registrationTime!: number;
    startTime!: number;
    cancelled!: boolean;
}
