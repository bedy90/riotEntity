import * as ApexPlayerInterface from './v1/IApexPlayerInfoDTO';
import * as ChallengeInterface from './v1/IChallengeConfigInfoDTO';

export namespace Challenges {
    export namespace v1 {
        export import IApexPlayerInfoDTO = ApexPlayerInterface.IApexPlayerInfoDTO;
        export import IChallengeConfigInfoDTO = ChallengeInterface.IChallengeConfigInfoDTO;

    }
}