import * as AccountCheck from './v1/AccountChecker';

export namespace Account {
    export namespace v1 {
        export import isIAccountDTO = AccountCheck.isIAccountDTO;
    }
}
