import * as StatusInterface_v1 from './v1/IStatus';

export namespace Status {

    export namespace v1 {
        export import IContentDto = StatusInterface_v1.IContentDto;
        export import IPlatformDataDto = StatusInterface_v1.IPlatformDataDto;
        export import IStatusDTO = StatusInterface_v1.IStatusDTO;
        export import IUpdateDto = StatusInterface_v1.IUpdateDto;
    }
}