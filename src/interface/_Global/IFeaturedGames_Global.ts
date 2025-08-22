import { IFeaturedGameInfo_Global } from './IFeaturedGameInfo_Global.js';

/**
 * Interface IFeaturedGames_Global
 *
 * @namespace Global
 * @version v1
 * @name IFeaturedGames_Global
 */
export interface IFeaturedGames_Global {
    /**
     * The list of featured games
     */
    gameList: IFeaturedGameInfo_Global[];

    /**
     * 	The suggested interval to wait before requesting FeaturedGames again
     */
    clientRefreshInterval: bigint;
}