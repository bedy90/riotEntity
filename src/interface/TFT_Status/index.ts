import * as UpdateDTOInterface from './v1/IUpdateDTO';
import * as StatusDTOInterface from './v1/IStatusDTO';
import * as PlatformDataDTOInterface from './v1/IPlatformDataDTO';
import * as ContentDTOInterface from './v1/IContentDTO';

export namespace TFT_Status {
  export namespace v1 {
    export import IUpdateDTO = UpdateDTOInterface.IUpdateDTO;
    export import IStatusDTO = StatusDTOInterface.IStatusDTO;
    export import IPlatformDataDTO = PlatformDataDTOInterface.IPlatformDataDTO;
    export import IContentDTO = ContentDTOInterface.IContentDTO;
  }
}
