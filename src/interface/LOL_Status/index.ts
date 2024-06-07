import * as StatusInterface_v4 from './v4/IStatus';

export namespace LoL_Status {
    export namespace v4 {
        export import IContentDto = StatusInterface_v4.IContentDTO;
        export import IPlatformDataDto = StatusInterface_v4.IPlatformDataDTO;
        export import IStatusDTO = StatusInterface_v4.IStatusDTO;
        export import IUpdateDto = StatusInterface_v4.IUpdateDTO;
    }
}