// Namespace version
import * as AccountInterfaces from './v1/IAccountDTO';
// import { IAccountDTO } from './v1/IAccountDTO';
// import { IActiveShardDTO } from './v1/IActiveShardDTO';

export namespace Account {
    export namespace v1 {
        export import IAccountDTO = AccountInterfaces.IAccountDTO;

        // export default { AccountInterfaces.IAccountDTO, AccountInterfaces.IActiveShardDTO } as const;
    }
}