import { Interfaces } from '@/riotentity';

/**
 * Class ObjectivesDTO
 *
 * @namespace Match
 * @version v5
 * @name IObjectivesDTO
 */
export class ObjectivesDTO implements Interfaces.Match.v5.IObjectivesDTO {
    baron!: Interfaces.Match.v5.IObjectiveDTO;
    champion!: Interfaces.Match.v5.IObjectiveDTO;
    dragon!: Interfaces.Match.v5.IObjectiveDTO;
    inhibitor!: Interfaces.Match.v5.IObjectiveDTO;
    riftHerald!: Interfaces.Match.v5.IObjectiveDTO;
    tower!: Interfaces.Match.v5.IObjectiveDTO;
}
