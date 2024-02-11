import * as CurrentGame from './v4/CurrentGameInfo';
import * as FeatureGame from './v4/FeaturedGames';

export namespace Spectactor {
    export namespace v4 {
        export import CurrentGameInfo = CurrentGame.CurrentGameInfo;
        export import CurrentGameParticipant = CurrentGame.CurrentGameParticipant;
        export import GameCustomizationObject = CurrentGame.GameCustomizationObject;
        export import Perks = CurrentGame.Perks;

        export import BannedChampion = FeatureGame.BannedChampion;
        export import FeaturedGameInfo = FeatureGame.FeaturedGameInfo;
        export import FeaturedGames = FeatureGame.FeaturedGames;
        export import Observer = FeatureGame.Observer;
        export import Participant = FeatureGame.Participant;
    }
}