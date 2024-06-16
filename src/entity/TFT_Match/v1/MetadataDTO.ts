import { Interfaces } from '@/riotentity';

/**
 * Class MetadataDTO
 *
 * @namespace TFT_Match
 * @version v1
 * @name IMetadataDTO
 */
export class MetadataDTO implements Interfaces.TFT_Match.v1.IMetadataDTO {
    dataVersion!: string;
    matchId!: string;
    participants!: string[];
}
