import { Interfaces } from '@/riotentity';
import { ClashPosition, ClashRole } from '@/riotentity';

/**
 * Class PlayerDTO_v1
 *
 * @namespace Clash
 * @version v1
 * @name IPlayerDTO
 */
export class PlayerDTO_v1 implements Interfaces.Clash_IPlayerDTO_v1 {
    summonerId!: string;
    teamId!: string;
    position!: ClashPosition | string;
    role!: ClashRole | string;
}
