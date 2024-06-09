import { Interfaces } from '@/riotentity';

/**
 * Class MetadataDTO
 *
 * @namespace Match
 * @version v5
 * @name IMetadataDTO
 */
export class MetadataDTO implements Interfaces.Match.v5.IMetadataDTO {
    dataVersion!: string;
    matchId!: string;
    participants!: string[];
}
