import { Interfaces } from '@/riotentity';

/**
 * Class GameCustomizationObject
 *
 * @namespace Spectactor
 * @version v4
 * @name IGameCustomizationObject
 */
export class GameCustomizationObject implements Interfaces.Spectactor.v4.IGameCustomizationObject {
    category!: string;
    content!: string;
}
