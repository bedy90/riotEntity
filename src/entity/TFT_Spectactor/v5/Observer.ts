import { Interfaces } from '@/riotentity';

/**
 * Class Observer
 *
 * @namespace TFT_Spectactor
 * @version v5
 * @name IObserver
 */
export class Observer implements Interfaces.TFT_Spectactor.v5.IObserver {
    encryptionKey!: string;
}
