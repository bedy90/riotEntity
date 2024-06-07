import { Interfaces } from '@/riotentity';

export class MetadataDTO implements Interfaces.Match.v5.IMetadataDTO {
    dataVersion!: string;
    matchId!: string;
    participants!: string[];
}
