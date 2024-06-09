import * as UpdateDTOInterface from './v4/IUpdateDTO';
import * as StatusDTOInterface from './v4/IStatusDTO';
import * as PlatformDataDTOInterface from './v4/IPlatformDataDTO';
import * as ContentDTOInterface from './v4/IContentDTO';

export namespace LoL_Status {
  export namespace v4 {
    export import IUpdateDTO = UpdateDTOInterface.IUpdateDTO;
    export import IStatusDTO = StatusDTOInterface.IStatusDTO;
    export import IPlatformDataDTO = PlatformDataDTOInterface.IPlatformDataDTO;
    export import IContentDTO = ContentDTOInterface.IContentDTO;
  }
}
