import { Interfaces } from '@/riotentity';

export class ContentDTO implements Interfaces.LoL_Status.v4.IContentDTO {
    local!: string;
    content!: string;
}
