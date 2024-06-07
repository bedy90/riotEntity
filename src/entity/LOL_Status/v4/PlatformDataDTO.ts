import { Interfaces } from '@/riotentity';
import { IStatusDTO_Global } from '@/src/interface/_Global/IStatusDTO_Global';

export class PlatformDataDTO implements Interfaces.LoL_Status.v4.IPlatformDataDTO {
    id!: string;
    name!: string;
    locales!: string[];
    maintenances!: IStatusDTO_Global[];
    incidents!: IStatusDTO_Global[];
}
