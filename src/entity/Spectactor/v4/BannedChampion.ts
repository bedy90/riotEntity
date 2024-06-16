import { Interfaces } from '@/riotentity';

/**
 * Class BannedChampion
 *
 * @namespace Spectactor
 * @version v4
 * @name IBannedChampion
 */
export class BannedChampion implements Interfaces.Spectactor.v4.IBannedChampion {
    pickTurn!: number;
    championId!: number;
    teamId!: number;
}
