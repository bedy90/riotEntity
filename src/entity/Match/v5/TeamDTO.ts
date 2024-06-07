import { Interfaces } from '@/riotentity';

export class TeamDTO implements Interfaces.Match.v5.ITeamDTO {
    bans!: Interfaces.Match.v5.IBanDTO[];
    objectives!: Interfaces.Match.v5.IObjectivesDTO;
    teamId!: number;
    win!: boolean;
}
