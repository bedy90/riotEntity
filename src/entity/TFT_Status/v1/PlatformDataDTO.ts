import { Interfaces } from '@/riotentity';
import { IStatusDTO_Global } from '@/src/interface/_Global/IStatusDTO_Global';

/**
 * Class PlatformDataDTO
 *
 * @namespace TFT_Status
 * @version v1
 * @name IPlatformDataDTO
 */
export class PlatformDataDTO implements Interfaces.TFT_Status.v1.IPlatformDataDTO {
    id!: string;
    name!: string;
    locales!: string[];
    maintenances!: IStatusDTO_Global[];
    incidents!: IStatusDTO_Global[];
}
