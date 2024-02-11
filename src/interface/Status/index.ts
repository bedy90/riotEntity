import * as ShardInterface from './v3/IShardStatus';

export namespace Status {
    export namespace v3 {
        export import IIncident = ShardInterface.IIncident;
        export import IMessage = ShardInterface.IMessage;
        export import IService = ShardInterface.IService;
        export import IShardStatus = ShardInterface.IShardStatus;
        export import ITranslation = ShardInterface.ITranslation;
    }
}