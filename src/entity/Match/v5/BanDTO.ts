import { Interfaces } from '@/riotentity';

export class BanDTO implements Interfaces.Match.v5.IBanDTO {
    championId!: number;
    pickTurn!: number;
}
