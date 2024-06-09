import { Interfaces } from '@/riotentity';

/**
 * Class ContentDTO
 *
 * @namespace TFT_Status
 * @version v1
 * @name IContentDTO
 */
export class ContentDTO implements Interfaces.TFT_Status.v1.IContentDTO {
    local!: string;
    content!: string;
}
