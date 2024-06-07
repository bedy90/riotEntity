import { Interfaces } from '@/riotentity';

export class BannedChampion implements Interfaces.TFT_Spectactor.v5.IBannedChampion {
    pickTurn!: number;
    championId!: number;
    teamId!: number;
}
