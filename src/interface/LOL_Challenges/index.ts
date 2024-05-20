import * as ApexPlayerInterface from './v1/IApexPlayerInfoDTO';
import * as ChallengeInterface from './v1/IChallengeConfigInfoDTO';
import * as PlayerInfo from './v1/IPlayerInfoDTO';

export namespace LoL_Challenges {
    export namespace v1 {
        export import IApexPlayerInfoDTO = ApexPlayerInterface.IApexPlayerInfoDTO;

        export import IChallengeConfigInfoDTO = ChallengeInterface.IChallengeConfigInfoDTO;

        export import IChallengeInfo = PlayerInfo.IChallengeInfo;
        export import IChallengePoint = PlayerInfo.IChallengePoint;
        export import IPlayerClientPreference = PlayerInfo.IPlayerClientPreference;
        export import IPlayerInfoDTO = PlayerInfo.IPlayerInfoDTO;

    }
}