import { Interfaces } from '@/riotentity';
import { IFeaturedGameInfo_Global } from '@/src/interface/_Global/IFeaturedGameInfo_Global';

/**
 * Class FeaturedGames
 *
 * @namespace TFT_Spectactor
 * @version v5
 * @name IFeaturedGames
 */
export class FeaturedGames implements Interfaces.TFT_Spectactor.v5.IFeaturedGames {
    gameList!: IFeaturedGameInfo_Global[];
    clientRefreshInterval!: number;
}
