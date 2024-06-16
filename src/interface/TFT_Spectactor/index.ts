import * as PerksInterface from './v5/IPerks';
import * as ParticipantInterface from './v5/IParticipant';
import * as ObserverInterface from './v5/IObserver';
import * as GameCustomizationObjectInterface from './v5/IGameCustomizationObject';
import * as FeaturedGamesInterface from './v5/IFeaturedGames';
import * as FeaturedGameInfoInterface from './v5/IFeaturedGameInfo';
import * as CurrentGameParticipantInterface from './v5/ICurrentGameParticipant';
import * as CurrentGameInfoInterface from './v5/ICurrentGameInfo';
import * as BannedChampionInterface from './v5/IBannedChampion';

export namespace TFT_Spectactor {
  export namespace v5 {
    export import IPerks = PerksInterface.IPerks;
    export import IParticipant = ParticipantInterface.IParticipant;
    export import IObserver = ObserverInterface.IObserver;
    export import IGameCustomizationObject = GameCustomizationObjectInterface.IGameCustomizationObject;
    export import IFeaturedGames = FeaturedGamesInterface.IFeaturedGames;
    export import IFeaturedGameInfo = FeaturedGameInfoInterface.IFeaturedGameInfo;
    export import ICurrentGameParticipant = CurrentGameParticipantInterface.ICurrentGameParticipant;
    export import ICurrentGameInfo = CurrentGameInfoInterface.ICurrentGameInfo;
    export import IBannedChampion = BannedChampionInterface.IBannedChampion;
  }
}
