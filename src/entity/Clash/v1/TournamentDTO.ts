import { Interfaces } from '@/index';


export class TournamentDTO implements Interfaces.Clash.v1.ITournamentDTO {
    id!: number;
    themeId!: number;
    nameKey!: string;
    nameKeySecondary!: string;
    schedule!: Interfaces.Clash.v1.ITournamentPhaseDTO[];

}
export class TournamentPhaseDTO implements Interfaces.Clash.v1.ITournamentPhaseDTO {
    id!: number;
    registrationTime!: number;
    startTime!: number;
    cancelled!: boolean;

}
