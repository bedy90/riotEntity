import { Interfaces } from '@/riotentity';

/**
 * Class BannedChampion_v5
 *
 * @namespace TFT_Spectactor
 * @version v5
 * @name IBannedChampion
 */
export class BannedChampion_v5 implements Interfaces.TFT_IBannedChampion_v5 {
    pickTurn!: number;
    championId!: number;
    teamId!: number;
}
