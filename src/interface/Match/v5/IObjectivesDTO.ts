/* eslint-disable max-len */
/* eslint-disable no-shadow */
import { Interfaces } from '@/riotentity';

/**
 * Interface IObjectivesDTO
 *
 * @namespace Match
 * @version v5
 * @name IObjectivesDTO
 */
export interface IObjectivesDTO {
    baron: Interfaces.Match.v5.IObjectiveDTO;

    champion: Interfaces.Match.v5.IObjectiveDTO;

    dragon: Interfaces.Match.v5.IObjectiveDTO;

    inhibitor: Interfaces.Match.v5.IObjectiveDTO;

    riftHerald: Interfaces.Match.v5.IObjectiveDTO;

    tower: Interfaces.Match.v5.IObjectiveDTO;
}