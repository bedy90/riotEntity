import * as ApexInfo from './v1/ApexPlayerInfoDTO';
import * as ChallengeConfig from './v1/ChallengeConfigInfoDTO';

export namespace Challenges {
    export namespace v1 {
        export import ApexPlayerInfoDTO = ApexInfo.ApexPlayerInfoDTO;
        export import Account = ChallengeConfig.ChallengeConfigInfoDTO;
    }
}
