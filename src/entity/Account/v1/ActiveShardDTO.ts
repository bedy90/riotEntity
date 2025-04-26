import { Interfaces } from '@/riotentity';

/**
 * Class ActiveShardDTO_v1
 *
 * @namespace Account
 * @version v1
 * @name IActiveShardDTO
 */
export class ActiveShardDTO_v1 implements Interfaces.IActiveShardDTO_v1 {
    puuid!: number;
    game!: string;
    activeShard!: string;
}
