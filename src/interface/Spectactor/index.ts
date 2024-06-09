import * as PerksInterface from './v4/IPerks';
import * as ParticipantInterface from './v4/IParticipant';
import * as ObserverInterface from './v4/IObserver';
import * as GameCustomizationObjectInterface from './v4/IGameCustomizationObject';
import * as FeaturedGamesInterface from './v4/IFeaturedGames';
import * as FeaturedGameInfoInterface from './v4/IFeaturedGameInfo';
import * as CurrentGameParticipantInterface from './v4/ICurrentGameParticipant';
import * as CurrentGameInfoInterface from './v4/ICurrentGameInfo';
import * as BannedChampionInterface from './v4/IBannedChampion';

export namespace Spectactor {
  export namespace v4 {
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
