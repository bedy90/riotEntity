import { Interfaces } from '@/riotentity';

export class BannedChampion implements Interfaces.Spectactor.v4.IBannedChampion {
    pickTurn!: number;
    championId!: number;
    teamId!: number;
}
