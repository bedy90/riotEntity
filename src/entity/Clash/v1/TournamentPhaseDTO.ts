import { Interfaces } from '@/riotentity';

export class TournamentPhaseDTO implements Interfaces.Clash.v1.ITournamentPhaseDTO {
    id!: number;
    registrationTime!: number;
    startTime!: number;
    cancelled!: boolean;
}
