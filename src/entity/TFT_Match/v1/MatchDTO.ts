import { Interfaces } from '@/riotentity';

export class MatchDTO implements Interfaces.TFT_Match.v1.IMatchDTO {
    metadata!: Interfaces.TFT_Match.v1.IMetadataDTO;
    info!: Interfaces.TFT_Match.v1.IInfoDTO;
}
