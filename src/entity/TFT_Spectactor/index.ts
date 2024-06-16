import * as PerksCls from './v5/Perks';
import * as ParticipantCls from './v5/Participant';
import * as ObserverCls from './v5/Observer';
import * as GameCustomizationObjectCls from './v5/GameCustomizationObject';
import * as FeaturedGamesCls from './v5/FeaturedGames';
import * as FeaturedGameInfoCls from './v5/FeaturedGameInfo';
import * as CurrentGameParticipantCls from './v5/CurrentGameParticipant';
import * as CurrentGameInfoCls from './v5/CurrentGameInfo';
import * as BannedChampionCls from './v5/BannedChampion';

export namespace TFT_Spectactor {
  export namespace v5 {
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
