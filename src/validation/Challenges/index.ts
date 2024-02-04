import * as ApexPLayerCheck from './v1/ApexPlayerInfoDTO';
import * as ChallengeConfigCheck from './v1/ChallengeConfigInfoDTO';

export namespace Challenges {
    export namespace v1 {
        export import isIApexPlayerInfoDTO = ApexPLayerCheck.isIApexPlayerInfoDTO;
        export import isIChallengeConfigInfoDTO = ChallengeConfigCheck.isIChallengeConfigInfoDTO;
    }
}
