import * as Shards from './v3/ShardStatus';

export namespace Status {
    export namespace v3 {
        export import Incident = Shards.Incident;
        export import Message = Shards.Message;
        export import Service = Shards.Service;
        export import ShardStatus = Shards.ShardStatus;
        export import Translation = Shards.Translation;
    }
}
