import { PublishLocations } from '../../index.js';
import { IContentDTO_Global } from './IContentDTO_Global.js';

/**
 * Interface IUpdateDTO_Global
 *
 * @namespace Global
 * @version v1
 * @name IUpdateDTO_Global
 * @strict
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
