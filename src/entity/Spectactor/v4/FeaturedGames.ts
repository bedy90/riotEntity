import { Interfaces } from '@/riotentity';
import { IFeaturedGameInfo_Global } from '@/src/interface/_Global/IFeaturedGameInfo_Global';

/**
 * Class FeaturedGames
 *
 * @namespace Spectactor
 * @version v4
 * @name IFeaturedGames
 */
export class FeaturedGames implements Interfaces.Spectactor.v4.IFeaturedGames {
    gameList!: IFeaturedGameInfo_Global[];
    clientRefreshInterval!: number;
}
