import { Interfaces } from '@/riotentity';

/**
 * Class ObjectivesDTO_v5
 *
 * @namespace Match
 * @version v5
 * @name IObjectivesDTO
 */
export class ObjectivesDTO_v5 implements Interfaces.IObjectivesDTO_v5 {
    baron!: Interfaces.IObjectiveDTO_v5;
    champion!: Interfaces.IObjectiveDTO_v5;
    dragon!: Interfaces.IObjectiveDTO_v5;
    inhibitor!: Interfaces.IObjectiveDTO_v5;
    riftHerald!: Interfaces.IObjectiveDTO_v5;
    tower!: Interfaces.IObjectiveDTO_v5;
}
