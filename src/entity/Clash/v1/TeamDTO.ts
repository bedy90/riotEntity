import { Interfaces } from '@/index';

export class TeamDTO implements Interfaces.Clash.v1.ITeamDTO {
    id!: string;
    tournamentId!: number;
    name!: string;
    iconId!: number;
    tier!: number;
    captain!: string;
    abbreviation!: string;
    players!: Interfaces.Clash.v1.IPlayerDTO[];

}

