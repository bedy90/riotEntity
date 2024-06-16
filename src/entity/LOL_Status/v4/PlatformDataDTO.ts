import { Interfaces } from '@/riotentity';
import { IStatusDTO_Global } from '@/src/interface/_Global/IStatusDTO_Global';

/**
 * Class PlatformDataDTO
 *
 * @namespace LoL_Status
 * @version v4
 * @name IPlatformDataDTO
 */
export class PlatformDataDTO implements Interfaces.LoL_Status.v4.IPlatformDataDTO {
    id!: string;
    name!: string;
    locales!: string[];
    maintenances!: IStatusDTO_Global[];
    incidents!: IStatusDTO_Global[];
}
