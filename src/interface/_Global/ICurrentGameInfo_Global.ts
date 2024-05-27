import { IBannedChampion_Global } from './IBannedChampion_Global';
import { ICurrentGameParticipant_Global } from './ICurrentGameParticipant_Global';
import { IObserver_Global } from './IObserver_Global';

export interface ICurrentGameInfo_Global {
    /**
     * The ID of the game
     */
    gameId: number;
    
    /**
     * The game type
     */
    gameType: string;

    /**
     * The game start time represented in epoch milliseconds
     */
    gameStartTime: number;

    /**
     * 	The ID of the map
     */
    mapId: number;

    /**
     * 	The amount of time in seconds that has passed since the game started
     */
    gameLength: number;

    /**
     * The ID of the platform on which the game is being played
     */
    platformId: string;

    /**
     * The game mode
     */
    gameMode: string;

    /**
     * 	Banned champion information
     */
    bannedChampions: IBannedChampion_Global[];

    /**
     * The queue type (queue types are documented on the Game Constants page)
     */
    gameQueueConfigId: number;

    /**
     * 	The observer information
     */
    observers: IObserver_Global;

    /**
     * 	The participant information
     */
    participants: ICurrentGameParticipant_Global[];
}