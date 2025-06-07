/**
 * Interface ITournamentPhaseDTO
 *
 * @namespace Clash
 * @version v1
 * @name ITournamentPhaseDTO
 * @prefix Clash_
 */
export interface ITournamentPhaseDTO_v1 {
    id: number;

    registrationTime: bigint;

    startTime: bigint;

    cancelled: boolean;
}
