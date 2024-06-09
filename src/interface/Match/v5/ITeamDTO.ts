/* eslint-disable max-len */
/* eslint-disable no-shadow */
import { Interfaces } from '@/riotentity';

/**
 * Interface ITeamDTO
 *
 * @namespace Match
 * @version v5
 * @name ITeamDTO
 */
export interface ITeamDTO {
    bans: Interfaces.Match.v5.IBanDTO[];

    objectives: Interfaces.Match.v5.IObjectivesDTO;

    teamId: number;

    win: boolean;
}
