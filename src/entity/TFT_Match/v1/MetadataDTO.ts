import { Interfaces } from '@/riotentity';

export class MetadataDTO implements Interfaces.TFT_Match.v1.IMetadataDTO {
    dataVersion!: string;
    matchId!: string;
    participants!: string[];
}
