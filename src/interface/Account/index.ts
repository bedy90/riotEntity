// Current version
// export * from './v1/IAccountDTO';

// Namespace version
import * as AccountInterfaces from './v1/IAccountDTO';

export namespace Account {
    export namespace v1 {
        export import IAccountDTO = AccountInterfaces.IAccountDTO;
    }
}