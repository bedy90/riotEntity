import { Interfaces } from '@/riotentity';

/**
 * Class BannedChampion
 *
 * @namespace TFT_Spectactor
 * @version v5
 * @name IBannedChampion
 */
export class BannedChampion implements Interfaces.TFT_Spectactor.v5.IBannedChampion {
    pickTurn!: number;
    championId!: number;
    teamId!: number;
}
