import * as ApexPLayerCheck from './v1/ApexPlayerChecker';
import * as ChallengeConfigCheck from './v1/ChallengeConfigInfoChecker';

export namespace Challenges {
    export namespace v1 {
        export import isIApexPlayerInfoDTO = ApexPLayerCheck.isIApexPlayerInfoDTO;
        export import isIChallengeConfigInfoDTO = ChallengeConfigCheck.isIChallengeConfigInfoDTO;
    }
}
