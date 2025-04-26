import { Interfaces } from '@/riotentity';
import { IFeaturedGameInfo_Global } from '@/interface/_Global/IFeaturedGameInfo_Global';

/**
 * Class FeaturedGames_v5
 *
 * @namespace TFT_Spectactor
 * @version v5
 * @name IFeaturedGames
 */
export class FeaturedGames_v5 implements Interfaces.TFT_IFeaturedGames_v5 {
    gameList!: IFeaturedGameInfo_Global[];
    clientRefreshInterval!: number;
}
