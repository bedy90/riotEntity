import { Interfaces } from '@/riotentity';

/**
 * Class TeamDTO_v5
 *
 * @namespace Match
 * @version v5
 * @name ITeamDTO
 */
export class TeamDTO_v5 implements Interfaces.ITeamDTO_v5 {
    bans!: Interfaces.IBanDTO_v5[];
    objectives!: Interfaces.IObjectiveDTO_v5;
    teamId!: number;
    win!: boolean;
}
