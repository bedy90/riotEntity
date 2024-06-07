import { Interfaces } from '@/riotentity';
import { PublishLocations } from '@/riotentity';
import { IContentDTO_Global } from '@/src/interface/_Global/IContentDTO_Global';

export class UpdateDTO implements Interfaces.TFT_Status.v1.IUpdateDTO {
    id!: number;
    author!: string;
    publish!: boolean;
    publish_locations!: PublishLocations[] | string[];
    translations!: IContentDTO_Global[];
    created_at!: string;
    updated_at!: string;
}
