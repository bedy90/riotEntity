import { Interfaces } from '@/riotentity';

export class GameCustomizationObject implements Interfaces.TFT_Spectactor.v5.IGameCustomizationObject {
    category!: string;
    content!: string;
}
