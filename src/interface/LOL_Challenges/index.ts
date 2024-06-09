import * as ChallengeConfigInfoDTOInterface from './v1/IChallengeConfigInfoDTO';
import * as ApexPlayerInfoDTOInterface from './v1/IApexPlayerInfoDTO';

export namespace LoL_Challenges {
  export namespace v1 {
    export import IChallengeConfigInfoDTO = ChallengeConfigInfoDTOInterface.IChallengeConfigInfoDTO;
    export import IApexPlayerInfoDTO = ApexPlayerInfoDTOInterface.IApexPlayerInfoDTO;
  }
}
