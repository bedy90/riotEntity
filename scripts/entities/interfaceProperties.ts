import { PropertySignature, Type, InterfaceDeclaration } from "ts-morph";

export class InterfaceProperties {

    constructor (public propertyName: string, 
                public propertyType: string,
                public propertySignature: PropertySignature,
                public type: Type) {
    }

    get isPrimitive() : boolean {
        const type = this.type;
        return (
            type.isString() ||
            type.isNumber() ||
            type.isBoolean() ||
            type.isAny() ||
            type.isUndefined() ||
            type.isNull() ||
            type.isVoid() ||
            type.isNever() ||
            type.isUnknown()
          );
     //    return (this.type.isString() || this.type.isNumber() || this.type.isBoolean() || this.type.isUndefined() || this.type.isNull());
    }

    get isObject() : boolean {
        return (this.type.getText() === "object")
    }

    get isMap() : boolean {
        const symbol = this.type.getSymbol();
        return symbol ? symbol.getName() === "Map" : false;
        // return (this.type.getSymbol()?.getName() === "Map")
    }

    get isArray() : boolean {
        return (this.type.isArray());
    }

    // get isExternalReference(): boolean {
    //     return (this.type.getSymbol() && this.isPrimitive === false) ?? false;
    //      // C'est une référence à un autre type (interface, type alias, etc.)
    //      //         const symbol = this.type.getSymbol();
    //     //   const referencedName = symbol.getName(); 
    // }

    get isExternalReference(): boolean {
        if (this.isPrimitive || this.isArray || this.isMap) return false;
        const symbol = this.type.getSymbol();
        if (!symbol) return false;

        // Vérifie si la déclaration vient d'un fichier node_modules (lib externe)
        return symbol.getDeclarations().some(decl => decl.getSourceFile().getFilePath().includes("node_modules"));
      }

      get isOptionalProperty() : boolean {
        return (this.propertySignature.hasQuestionToken());
      }

    isExtendsProperties(ifaceDeclaration: InterfaceDeclaration): boolean {
        const parentInterface = this.propertySignature.getParent();
        return (parentInterface !== ifaceDeclaration);
    }

    get PropertyDeclaration() : string {
        const propName : string = this.propertyName;
        const propType : string = this.propertyType || 'any';
        const isOptional: boolean = this.isOptionalProperty;

        if (isOptional) {
            return `    ${propName}?: ${propType};`
        } else {
            return `    ${propName}!: ${propType};`
        }
    }

    // ? : optional parameters
    // ! : non-null
}
