import { Interfaces } from '@/riotentity';

export class ContentDTO implements Interfaces.TFT_Status.v1.IContentDTO {
    local!: string;
    content!: string;
}
