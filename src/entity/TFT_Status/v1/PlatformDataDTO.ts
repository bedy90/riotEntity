import { Interfaces } from '@/riotentity';
import { IStatusDTO_Global } from '@/interface/_Global/IStatusDTO_Global';

/**
 * Class PlatformDataDTO_v1
 *
 * @namespace TFT_Status
 * @version v1
 * @name IPlatformDataDTO
 */
export class PlatformDataDTO_v1 implements Interfaces.TFT_IPlatformDataDTO_v1 {
    id!: string;
    name!: string;
    locales!: string[];
    maintenances!: IStatusDTO_Global[];
    incidents!: IStatusDTO_Global[];
}
