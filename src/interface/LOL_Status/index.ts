import * as ShardInterface_v3 from './v3/IShardStatus';
import * as StatusInterface_v4 from './v4/IStatus';

export namespace LoL_Status {
    export namespace v3 {
        export import IIncident = ShardInterface_v3.IIncident;
        export import IMessage = ShardInterface_v3.IMessage;
        export import IService = ShardInterface_v3.IService;
        export import IShardStatus = ShardInterface_v3.IShardStatus;
        export import ITranslation = ShardInterface_v3.ITranslation;
    }

    export namespace v4 {
        export import IContentDto = StatusInterface_v4.IContentDto;
        export import IPlatformDataDto = StatusInterface_v4.IPlatformDataDto;
        export import IStatusDTO = StatusInterface_v4.IStatusDTO;
        export import IUpdateDto = StatusInterface_v4.IUpdateDto;
    }
}