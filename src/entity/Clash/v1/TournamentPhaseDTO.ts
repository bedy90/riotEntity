import { Interfaces } from '@/riotentity';

/**
 * Class TournamentPhaseDTO_v1
 *
 * @namespace Clash
 * @version v1
 * @name ITournamentPhaseDTO
 */
export class TournamentPhaseDTO_v1 implements Interfaces.Clash_ITournamentPhaseDTO_v1 {
    id!: number;
    registrationTime!: number;
    startTime!: number;
    cancelled!: boolean;
}
