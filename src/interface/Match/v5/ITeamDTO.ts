// eslint-disable max-len
// eslint-disable no-shadow
import { Interfaces } from '../../../index.js';

/**
 * Interface ITeamDTO
 *
 * @namespace Match
 * @version v5
 * @name ITeamDTO
 * @strict
 */
export interface ITeamDTO_v5 {
    bans: Interfaces.IBanDTO_v5[];

    objectives: Interfaces.IObjectiveDTO_v5;

    teamId: number;

    win: boolean;
}
