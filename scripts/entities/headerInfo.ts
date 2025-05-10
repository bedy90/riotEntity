

export class HeaderInfo {

    constructor(public namespace: string | (any | undefined),
        public version: number | (any | undefined),
        public name: string | (any | undefined),
        public prefix: string | (any | undefined),
        public notImplemented: boolean) {
    }

    isValid(): boolean {
        if (!this.namespace || !this.version || !this.name) {
            return false
        }
        return true;
    }
}
