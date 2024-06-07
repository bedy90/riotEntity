import * as Companion from './v1/CompanionDTO';
import * as Info from './v1/InfoDTO';
import * as Match from './v1/MatchDTO';
import * as Metadata from './v1/MetadataDTO';
import * as Participant from './v1/ParticipantDTO';
import * as Trait from './v1/TraitDTO';
import * as Unit from './v1/UnitDTO';

export namespace TFT_Match {
    export namespace v1 {
        export import CompanionDTO = Companion.CompanionDTO;
        export import InfoDTO = Info.InfoDTO;
        export import MatchDTO = Match.MatchDTO;
        export import MetadataDTO = Metadata.MetadataDTO;
        export import ParticipantDTO = Participant.ParticipantDTO;
        export import TraitDTO = Trait.TraitDTO;
        export import UnitDTO = Unit.UnitDTO;
    }
}