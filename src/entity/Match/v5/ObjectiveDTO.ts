import { Interfaces } from '@/riotentity';

/**
 * Class ObjectiveDTO
 *
 * @namespace Match
 * @version v5
 * @name IObjectiveDTO
 */
export class ObjectiveDTO implements Interfaces.Match.v5.IObjectiveDTO {
    first!: boolean;
    kills!: number;
}
