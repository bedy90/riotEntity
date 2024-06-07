// import * as Status from './v4/Status';
import * as Content from './v4/ContentDTO';
import * as PlatformData from './v4/PlatformDataDTO';
import * as Status from './v4/StatusDTO';
import * as Update from './v4/UpdateDTO';

export namespace LoL_Status {
    export namespace v4 {
        export import ContentDTO = Content.ContentDTO;
        export import PlatformDataDTO = PlatformData.PlatformDataDTO;
        export import StatusDTO = Status.StatusDTO;
        export import UpdateDTO = Update.UpdateDTO;
    }
}
