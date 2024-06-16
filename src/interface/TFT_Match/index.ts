import * as UnitDTOInterface from './v1/IUnitDTO';
import * as TraitDTOInterface from './v1/ITraitDTO';
import * as ParticipantDTOInterface from './v1/IParticipantDTO';
import * as MetadataDTOInterface from './v1/IMetadataDTO';
import * as MatchDTOInterface from './v1/IMatchDTO';
import * as InfoDTOInterface from './v1/IInfoDTO';
import * as CompanionDTOInterface from './v1/ICompanionDTO';

export namespace TFT_Match {
  export namespace v1 {
    export import IUnitDTO = UnitDTOInterface.IUnitDTO;
    export import ITraitDTO = TraitDTOInterface.ITraitDTO;
    export import IParticipantDTO = ParticipantDTOInterface.IParticipantDTO;
    export import IMetadataDTO = MetadataDTOInterface.IMetadataDTO;
    export import IMatchDTO = MatchDTOInterface.IMatchDTO;
    export import IInfoDTO = InfoDTOInterface.IInfoDTO;
    export import ICompanionDTO = CompanionDTOInterface.ICompanionDTO;
  }
}
