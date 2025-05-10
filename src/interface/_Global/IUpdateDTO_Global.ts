import { PublishLocations } from '@/riotentity';
import { IContentDTO_Global } from './IContentDTO_Global';

/**
 * Interface IUpdateDTO_Global
 *
 * @namespace Global
 * @version v1
 * @name IUpdateDTO_Global
 */
export interface IUpdateDTO_Global {
    id: number;

    author: string;

    publish: boolean;

    /**
     * (Legal values: riotclient; riotstatus; game)
     */
    publish_locations: PublishLocations[] | string[];

    translations: IContentDTO_Global[];

    created_at: string;

    updated_at: string
}
