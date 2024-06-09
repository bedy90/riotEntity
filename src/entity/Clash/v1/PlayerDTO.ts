import { Interfaces } from '@/riotentity';
import { ClashPosition, ClashRole } from '@/riotentity';

/**
 * Class PlayerDTO
 *
 * @namespace Clash
 * @version v1
 * @name IPlayerDTO
 */
export class PlayerDTO implements Interfaces.Clash.v1.IPlayerDTO {
    summonerId!: string;
    teamId!: string;
    position!: ClashPosition | string;
    role!: ClashRole | string;
}
