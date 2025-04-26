import { Interfaces } from '@/riotentity';

/**
 * Class MetadataDTO_v1
 *
 * @namespace TFT_Match
 * @version v1
 * @name IMetadataDTO
 */
export class MetadataDTO_v1 implements Interfaces.TFT_IMetadataDTO_v1 {
    dataVersion!: string;
    matchId!: string;
    participants!: string[];
}
