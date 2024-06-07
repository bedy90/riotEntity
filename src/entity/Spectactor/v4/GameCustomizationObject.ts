import { Interfaces } from '@/riotentity';

export class GameCustomizationObject implements Interfaces.Spectactor.v4.IGameCustomizationObject {
    category!: string;
    content!: string;
}
