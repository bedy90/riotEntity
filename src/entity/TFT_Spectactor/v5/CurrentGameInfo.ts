import { Interfaces } from '@/riotentity';
import { IBannedChampion_Global } from '@/interface/_Global/IBannedChampion_Global';
import { IObserver_Global } from '@/interface/_Global/IObserver_Global';
import { ICurrentGameParticipant_Global } from '@/interface/_Global/ICurrentGameParticipant_Global';

/**
 * Class CurrentGameInfo_v5
 *
 * @namespace TFT_Spectactor
 * @version v5
 * @name ICurrentGameInfo
 */
export class CurrentGameInfo_v5 implements Interfaces.TFT_ICurrentGameInfo_v5 {
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
