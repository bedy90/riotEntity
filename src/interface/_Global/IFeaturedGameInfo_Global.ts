import { GameMode, GameType } from '@/src/declaration';
import { IBannedChampion_Global } from './IBannedChampion_Global';
import { IObserver_Global } from './IObserver_Global';
import { IParticipant_Global } from './IParticipant_Global';

/**
 * Interface IFeaturedGameInfo_Global
 *
 * @namespace Global
 * @name IFeaturedGameInfo_Global
 */
export interface IFeaturedGameInfo_Global {
    /**
     * The game mode (Legal values: CLASSIC, ODIN, ARAM, TUTORIAL, ONEFORALL, ASCENSION, FIRSTBLOOD, KINGPORO)
     */
    gameMode: GameMode | string;

    /**
     * The amount of time in seconds that has passed since the game started
     */
    gameLength: number;

    /**
     * The ID of the map
     */
    mapId: number;

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
    gameId: number;

    /**
     * The observer information
     */
    observers: IObserver_Global;

    /**
     * The queue type (queue types are documented on the Game Constants page)
     */
    gameQueueConfigId: number;

    /**
     * 	The participant information
     */
    participants: IParticipant_Global[];

    /**
     * The ID of the platform on which the game is being played
     */
    platformId: string;
}
