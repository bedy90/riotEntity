import { Interfaces } from '@/riotentity';
import { IFeaturedGameInfo_Global } from '@/src/interface/_Global/IFeaturedGameInfo_Global';

export class FeaturedGames implements Interfaces.TFT_Spectactor.v5.IFeaturedGames {
    gameList!: IFeaturedGameInfo_Global[];
    clientRefreshInterval!: number;
}
