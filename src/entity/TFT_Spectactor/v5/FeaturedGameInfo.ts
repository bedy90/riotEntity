import { Interfaces } from '@/riotentity';
import { GameMode, GameType } from '@/riotentity';
import { IBannedChampion_Global } from '@/interface/_Global/IBannedChampion_Global';
import { IObserver_Global } from '@/interface/_Global/IObserver_Global';
import { IParticipant_Global } from '@/interface/_Global/IParticipant_Global';

/**
 * Class FeaturedGameInfo_v5
 *
 * @namespace TFT_Spectactor
 * @version v5
 * @name IFeaturedGameInfo
 */
export class FeaturedGameInfo_v5 implements Interfaces.TFT_IFeaturedGameInfo_v5 {
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
