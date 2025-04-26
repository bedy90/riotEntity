import { Interfaces } from '@/riotentity';
import { IFeaturedGameInfo_Global } from '@/interface/_Global/IFeaturedGameInfo_Global';

/**
 * Class FeaturedGames_v4
 *
 * @namespace Spectactor
 * @version v4
 * @name IFeaturedGames
 */
export class FeaturedGames_v4 implements Interfaces.IFeaturedGames_v4 {
    gameList!: IFeaturedGameInfo_Global[];
    clientRefreshInterval!: number;
}
