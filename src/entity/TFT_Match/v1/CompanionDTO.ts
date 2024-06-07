import { Interfaces } from '@/riotentity';

export class CompanionDTO implements Interfaces.TFT_Match.v1.ICompanionDTO {
    content_ID!: string;
    item_ID!: number;
    skin_ID!: number;
    species!: string;
}
