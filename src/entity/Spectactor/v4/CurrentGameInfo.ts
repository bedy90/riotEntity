import { Interfaces } from '@/riotentity';
import { IBannedChampion_Global } from '@/interface/_Global/IBannedChampion_Global';
import { IObserver_Global } from '@/interface/_Global/IObserver_Global';
import { ICurrentGameParticipant_Global } from '@/interface/_Global/ICurrentGameParticipant_Global';

/**
 * Class CurrentGameInfo_v4
 *
 * @namespace Spectactor
 * @version v4
 * @name ICurrentGameInfo
 */
export class CurrentGameInfo_v4 implements Interfaces.ICurrentGameInfo_v4 {
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
