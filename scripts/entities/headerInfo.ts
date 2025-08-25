import { NamespaceIndexTypes } from "../common";


export class HeaderInfo {

    private header: string;

    constructor(public namespace: string | (any | undefined),
        public version: number | (any | undefined),
        public name: string | (any | undefined),
        public prefix: string | (any | undefined),
        public notImplemented: boolean) {
        this.header = '';
    }

    isValid(): boolean {
        if (!this.namespace || !this.version || !this.name) {
            return false
        }
        return true;
    }

    /**
     * Generate JDOC header for classContent
     * @param className 
     * @param namespace 
     * @param version 
     * @param name 
     * @param prefix 
     * @returns 
     */
    generateJsDocHeader(objName: string, targetType: NamespaceIndexTypes): void {
        let header = '';

        header += '\n/**\n';
        switch (targetType) {
            case NamespaceIndexTypes.CLASSES:
                header += ` * Class ${objName}\n`;
                break;
            case NamespaceIndexTypes.VALIDATOR:
                header += ` * Validator ${objName}\n`;
                break;
            default:
                header += ` * ${objName}\n`;
                break;

        }
        header += ' *\n';
        header += ` * @namespace ${this.namespace}\n`;
        header += ` * @version ${this.version}\n`;
        header += ` * @name ${this.name}\n`;
        if (this.prefix && this.prefix !== undefined) {
            header += ` * @prefix ${this.prefix}\n`;
        }
        header += ' */';

        this.header = header;
    }

    get getHeader(): string {
        return this.header;
    }
}
