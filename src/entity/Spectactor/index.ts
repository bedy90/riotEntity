import * as BannedChampions from './v4/BannedChampion';
import * as CurrentGame from './v4/CurrentGameInfo';
import * as CurrentGameParticipants from './v4/CurrentGameParticipant';
import * as FeaturedGameInfos from './v4/FeaturedGameInfo';
import * as FeatureGame from './v4/FeaturedGames';
import * as GameCustomizationObjects from './v4/GameCustomizationObject';
import * as Observers from './v4/Observer';
import * as ParticipantD from './v4/Participant';
import * as SpectPerk from './v4/Perks';

export namespace Spectactor {
    export namespace v4 {
        export import CurrentGameInfo = CurrentGame.CurrentGameInfo;
        export import CurrentGameParticipant = CurrentGameParticipants.CurrentGameParticipant;
        export import GameCustomizationObject = GameCustomizationObjects.GameCustomizationObject;
        export import Perk = SpectPerk.Perks;

        export import BannedChampion = BannedChampions.BannedChampion;
        export import FeaturedGameInfo = FeaturedGameInfos.FeaturedGameInfo;
        export import FeaturedGames = FeatureGame.FeaturedGames;
        export import Observer = Observers.Observer;
        export import Participant = ParticipantD.Participant;
    }
}