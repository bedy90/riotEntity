import { Interfaces } from '@/riotentity';
import { PublishLocations } from '@/riotentity';
import { IContentDTO_Global } from '@/src/interface/_Global/IContentDTO_Global';

/**
 * Class UpdateDTO
 *
 * @namespace LoL_Status
 * @version v4
 * @name IUpdateDTO
 */
export class UpdateDTO implements Interfaces.LoL_Status.v4.IUpdateDTO {
    id!: number;
    author!: string;
    publish!: boolean;
    publish_locations!: PublishLocations[] | string[];
    translations!: IContentDTO_Global[];
    created_at!: string;
    updated_at!: string;
}
