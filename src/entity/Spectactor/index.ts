import * as PerksCls from './v4/Perks';
import * as ParticipantCls from './v4/Participant';
import * as ObserverCls from './v4/Observer';
import * as GameCustomizationObjectCls from './v4/GameCustomizationObject';
import * as FeaturedGamesCls from './v4/FeaturedGames';
import * as FeaturedGameInfoCls from './v4/FeaturedGameInfo';
import * as CurrentGameParticipantCls from './v4/CurrentGameParticipant';
import * as CurrentGameInfoCls from './v4/CurrentGameInfo';
import * as BannedChampionCls from './v4/BannedChampion';

export namespace Spectactor {
  export namespace v4 {
    export import Perks = PerksCls.Perks;
    export import Participant = ParticipantCls.Participant;
    export import Observer = ObserverCls.Observer;
    export import GameCustomizationObject = GameCustomizationObjectCls.GameCustomizationObject;
    export import FeaturedGames = FeaturedGamesCls.FeaturedGames;
    export import FeaturedGameInfo = FeaturedGameInfoCls.FeaturedGameInfo;
    export import CurrentGameParticipant = CurrentGameParticipantCls.CurrentGameParticipant;
    export import CurrentGameInfo = CurrentGameInfoCls.CurrentGameInfo;
    export import BannedChampion = BannedChampionCls.BannedChampion;
  }
}
