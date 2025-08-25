import { IBannedChampion_Global } from './IBannedChampion_Global.js';
import { ICurrentGameParticipant_Global } from './ICurrentGameParticipant_Global.js';
import { IObserver_Global } from './IObserver_Global.js';

/**
 * Interface ICurrentGameInfo_Global
 * @version v1
 * @namespace Global
 * @name ICurrentGameInfo_Global
 * @strict
 */
export interface ICurrentGameInfo_Global {
    /**
     * The ID of the game
     */
    gameId: bigint;

    /**
     * The game type
     */
    gameType: string;

    /**
     * The game start time represented in epoch milliseconds
     */
    gameStartTime: bigint;

    /**
     * 	The ID of the map
     */
    mapId: bigint;

    /**
     * 	The amount of time in seconds that has passed since the game started
     */
    gameLength: bigint;

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
    gameQueueConfigId: bigint;

    /**
     * 	The observer information
     */
    observers: IObserver_Global;

    /**
     * 	The participant information
     */
    participants: ICurrentGameParticipant_Global[];
}