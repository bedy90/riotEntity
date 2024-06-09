import { Interfaces } from '@/riotentity';

/**
 * Class GameCustomizationObject
 *
 * @namespace TFT_Spectactor
 * @version v5
 * @name IGameCustomizationObject
 */
export class GameCustomizationObject implements Interfaces.TFT_Spectactor.v5.IGameCustomizationObject {
    category!: string;
    content!: string;
}
