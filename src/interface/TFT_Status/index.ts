import * as StatusInterface_v1 from './v1/IStatus';

export namespace TFT_Status {
    export namespace v1 {
        export import IContentDTO = StatusInterface_v1.IContentDTO;
        export import IPlatformDataDTO = StatusInterface_v1.IPlatformDataDTO;
        export import IStatusDTO = StatusInterface_v1.IStatusDTO;
        export import IUpdateDTO = StatusInterface_v1.IUpdateDTO;
    }
}