import { Interfaces } from '@/riotentity';

export class MatchDTO implements Interfaces.Match.v5.IMatchDTO {
    metadata!: Interfaces.Match.v5.IMetadataDTO;
    info!: Interfaces.Match.v5.IInfoDTO;
}
