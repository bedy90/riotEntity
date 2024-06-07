import { Interfaces } from '@/riotentity';
import { GameMode, GameType } from '@/riotentity';
import { IBannedChampion_Global } from '@/src/interface/_Global/IBannedChampion_Global';
import { IObserver_Global } from '@/src/interface/_Global/IObserver_Global';
import { IParticipant_Global } from '@/src/interface/_Global/IParticipant_Global';

export class FeaturedGameInfo implements Interfaces.TFT_Spectactor.v5.IFeaturedGameInfo {
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
