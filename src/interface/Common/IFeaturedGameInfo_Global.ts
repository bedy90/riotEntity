import { GameMode, GameType } from '../../index.js';
import { IBannedChampion_Global } from './IBannedChampion_Global.js';
import { IObserver_Global } from './IObserver_Global.js';
import { IParticipant_Global } from './IParticipant_Global.js';

/**
 * Interface IFeaturedGameInfo_Global
 *
 * @namespace Global
 * @version v1
 * @name IFeaturedGameInfo_Global
 * @strict
 */
export interface IFeaturedGameInfo_Global {
    /**
     * The game mode (Legal values: CLASSIC, ODIN, ARAM, TUTORIAL, ONEFORALL, ASCENSION, FIRSTBLOOD, KINGPORO)
     */
    gameMode: GameMode | string;

    /**
     * The amount of time in seconds that has passed since the game started
     */
    gameLength: bigint;

    /**
     * The ID of the map
     */
    mapId: bigint;

    /**
     * The game type (Legal values: CUSTOM_GAME, MATCHED_GAME, TUTORIAL_GAME)
     */
    gameType: GameType | string;

    /**
     * Banned champion information
     */
    bannedChampions: IBannedChampion_Global[];

    /**
     * The ID of the game
     */
    gameId: bigint;

    /**
     * The observer information
     */
    observers: IObserver_Global;

    /**
     * The queue type (queue types are documented on the Game Constants page)
     */
    gameQueueConfigId: bigint;

    /**
     * 	The participant information
     */
    participants: IParticipant_Global[];

    /**
     * The ID of the platform on which the game is being played
     */
    platformId: string;
}
