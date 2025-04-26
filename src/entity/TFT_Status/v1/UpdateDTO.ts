import { IContentDTO_Global } from '@/interface/_Global/IContentDTO_Global';
import { Interfaces } from '@/riotentity';
import { PublishLocations } from '@/riotentity';

/**
 * Class UpdateDTO_v1
 *
 * @namespace TFT_Status
 * @version v1
 * @name IUpdateDTO
 */
export class UpdateDTO_v1 implements Interfaces.TFT_IUpdateDTO_v1 {
    id!: number;
    author!: string;
    publish!: boolean;
    publish_locations!: PublishLocations[] | string[];
    translations!: IContentDTO_Global[];
    created_at!: string;
    updated_at!: string;
}
