import { Interfaces } from '@/riotentity';
import { IStatusDTO_Global } from '@/interface/_Global/IStatusDTO_Global';

/**
 * Class PlatformDataDTO_v4
 *
 * @namespace LoL_Status
 * @version v4
 * @name IPlatformDataDTO
 */
export class PlatformDataDTO_v4 implements Interfaces.IPlatformDataDTO_v4 {
    id!: string;
    name!: string;
    locales!: string[];
    maintenances!: IStatusDTO_Global[];
    incidents!: IStatusDTO_Global[];
}
