import { Interfaces } from '@/riotentity';
import { PublishLocations } from '@/riotentity';
import { IContentDTO_Global } from '@/interface/_Global/IContentDTO_Global';

/**
 * Class UpdateDTO_v4
 *
 * @namespace LoL_Status
 * @version v4
 * @name IUpdateDTO
 */
export class UpdateDTO_v4 implements Interfaces.IUpdateDTO_v4 {
    id!: number;
    author!: string;
    publish!: boolean;
    publish_locations!: PublishLocations[] | string[];
    translations!: IContentDTO_Global[];
    created_at!: string;
    updated_at!: string;
}
