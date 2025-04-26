import { Interfaces } from '@/riotentity';
import { GameMode, GameType } from '@/riotentity';
import { IBannedChampion_Global } from '@/interface/_Global/IBannedChampion_Global';
import { IObserver_Global } from '@/interface/_Global/IObserver_Global';
import { IParticipant_Global } from '@/interface/_Global/IParticipant_Global';

/**
 * Class FeaturedGameInfo_v4
 *
 * @namespace Spectactor
 * @version v4
 * @name IFeaturedGameInfo
 */
export class FeaturedGameInfo_v4 implements Interfaces.IFeaturedGameInfo_v4 {
    gameMode!: GameMode | string;
    gameLength!: number;
    mapId!: number;
    gameType!: GameType | string;
    bannedChampions!: IBannedChampion_Global[];
    gameId!: number;
    observers!: IObserver_Global;
    gameQueueConfigId!: number;
    participants!: IParticipant_Global[];
    platformId!: string;
}
