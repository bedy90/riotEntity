import { ClashRole, ClashPosition, Interfaces } from '@/riotentity';

export class PlayerDTO implements Interfaces.Clash.v1.IPlayerDTO {
    summonerId!: string;
    teamId!: string;
    position!: ClashPosition | string;
    role!: ClashRole | string;
}
