import { Interfaces } from '@/riotentity';
import { IBannedChampion_Global } from '@/src/interface/_Global/IBannedChampion_Global';
import { ICurrentGameParticipant_Global } from '@/src/interface/_Global/ICurrentGameParticipant_Global';
import { IObserver_Global } from '@/src/interface/_Global/IObserver_Global';

export class CurrentGameInfo implements Interfaces.TFT_Spectactor.v5.ICurrentGameInfo {
    gameId!: number;
    gameType!: string;
    gameStartTime!: number;
    mapId!: number;
    gameLength!: number;
    platformId!: string;
    gameMode!: string;
    bannedChampions!: IBannedChampion_Global[];
    gameQueueConfigId!: number;
    observers!: IObserver_Global;
    participants!: ICurrentGameParticipant_Global[];
}
