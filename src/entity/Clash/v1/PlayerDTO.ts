import { Interfaces } from '@/index';

export class PlayerDTO implements Interfaces.Clash.v1.IPlayerDTO {
    summonerId!: string;
    teamId!: string;
    position!: string;
    role!: string;
}
