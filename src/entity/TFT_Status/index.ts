import * as Content from './v1/ContentDTO';
import * as PlatformData from './v1/PlatformDataDTO';
import * as Status from './v1/StatusDTO';
import * as Update from './v1/UpdateDTO';

export namespace TFT_Status {
    export namespace v1 {
        export import ContentDTO = Content.ContentDTO;
        export import PlatformDataDTO = PlatformData.PlatformDataDTO;
        export import StatusDTO = Status.StatusDTO;
        export import UpdateDTO = Update.UpdateDTO;
    }
}