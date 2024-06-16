import { Interfaces } from '@/riotentity';

/**
 * Class BanDTO
 *
 * @namespace Match
 * @version v5
 * @name IBanDTO
 */
export class BanDTO implements Interfaces.Match.v5.IBanDTO {
    championId!: number;
    pickTurn!: number;
}
