import { Interfaces } from '@/riotentity';

/**
 * Class Observer
 *
 * @namespace Spectactor
 * @version v4
 * @name IObserver
 */
export class Observer implements Interfaces.Spectactor.v4.IObserver {
    encryptionKey!: string;
}
