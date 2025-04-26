import { Interfaces } from '@/riotentity';

/**
 * Class BannedChampion_v4
 *
 * @namespace Spectactor
 * @version v4
 * @name IBannedChampion
 */
export class BannedChampion_v4 implements Interfaces.IBannedChampion_v4 {
    pickTurn!: number;
    championId!: number;
    teamId!: number;
}
