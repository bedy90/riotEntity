import { Interfaces } from '@/riotentity';

/**
 * Class MetadataDTO_v5
 *
 * @namespace Match
 * @version v5
 * @name IMetadataDTO
 */
export class MetadataDTO_v5 implements Interfaces.IMetadataDTO_v5 {
    dataVersion!: string;
    matchId!: string;
    participants!: string[];
}
