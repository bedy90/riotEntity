import * as BannedChampions from './v5/BannedChampion';
import * as CurrentGameInfos from './v5/CurrentGameInfo';
import * as CurrentGameParticipants from './v5/CurrentGameParticipant';
import * as FeaturedGameInfos from './v5/FeaturedGameInfo';
import * as FeaturedGame from './v5/FeaturedGames';
import * as GameCustomizationObjects from './v5/GameCustomizationObject';
import * as Observers from './v5/Observer';
import * as Participants from './v5/Participant';
import * as Perk from './v5/Perks';

export namespace TFT_Spectactor {
    export namespace v5 {
        export import CurrentGameInfo = CurrentGameInfos.CurrentGameInfo;
        export import CurrentGameParticipant = CurrentGameParticipants.CurrentGameParticipant;
        export import GameCustomizationObject = GameCustomizationObjects.GameCustomizationObject;
        export import Perks = Perk.Perks;

        export import BannedChampion = BannedChampions.BannedChampion;
        export import FeaturedGameInfo = FeaturedGameInfos.FeaturedGameInfo;
        export import FeaturedGames = FeaturedGame.FeaturedGames;
        export import Observer = Observers.Observer;
        export import Participant = Participants.Participant;
    }
}