import { Interfaces } from '@/riotentity';

/**
 * Class ContentDTO
 *
 * @namespace LoL_Status
 * @version v4
 * @name IContentDTO
 */
export class ContentDTO implements Interfaces.LoL_Status.v4.IContentDTO {
    local!: string;
    content!: string;
}
