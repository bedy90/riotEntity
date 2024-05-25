import * as GameInfointerface from './v1/ICurrentGameInfo';
import * as FeatureInterfae from './v1/IFeaturedGames';

export namespace SpectactorTFT {
    export namespace v4 {
        export import ICurrentGameInfo = GameInfointerface.ICurrentGameInfo;
        export import ICurrentGameParticipant = GameInfointerface.ICurrentGameParticipant;
        export import IGameCustomizationObject = GameInfointerface.IGameCustomizationObject;
        export import IPerks = GameInfointerface.IPerks;

        export import IBannedChampion = FeatureInterfae.IBannedChampion;
        export import IFeaturedGameInfo = FeatureInterfae.IFeaturedGameInfo;
        export import IFeaturedGames = FeatureInterfae.IFeaturedGames;
        export import IObserver = FeatureInterfae.IObserver;
        export import IParticipant = FeatureInterfae.IParticipant;
    }
}