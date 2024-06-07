import { IFeaturedGameInfo_Global } from '../../_Global/IFeaturedGameInfo_Global';
import { IFeaturedGames_Global } from '../../_Global/IFeaturedGames_Global';
import { IBannedChampion_Global } from '../../_Global/IBannedChampion_Global';
import { IObserver_Global } from '../../_Global/IObserver_Global';
import { IParticipant_Global } from '../../_Global/IParticipant_Global';

/**
 * Interface IFeaturedGames
 * 
 * @namespace Spectactor
 * @version v4
 * @name IFeaturedGames
 */
export interface IFeaturedGames extends IFeaturedGames_Global  {
}

/**
 * Interface IFeaturedGameInfo
 * 
 * @namespace Spectactor
 * @version v4
 * @name IFeaturedGameInfo
 */
export interface IFeaturedGameInfo extends IFeaturedGameInfo_Global {
}

/**
 * Interface IBannedChampion
 * 
 * @namespace Spectactor
 * @version v4
 * @name IBannedChampion
 */
export interface IBannedChampion extends IBannedChampion_Global {
}

/**
 * Interface IObserver
 * 
 * @namespace Spectactor
 * @version v4
 * @name IObserver
 */
export interface IObserver extends IObserver_Global {
}

/**
 * Interface IParticipant
 * 
 * @namespace Spectactor
 * @version v4
 * @name IParticipant
 */
export interface IParticipant extends IParticipant_Global {
    /**
     * Flag indicating whether or not this participant is a bot
     */
    bot: boolean;
}