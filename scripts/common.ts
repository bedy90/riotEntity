//#region Enum
export enum ImportTypes {
    GLOBAL = 0,
    CUSTOM = 1,
  }
  
  export enum NamespaceIndexTypes {
    INTERFACE = 0,
    ENTITY = 1,
    VALIDATOR = 2
  }
  
  export enum ValidationTypes {
    GENERIC = 1,
    GENERIC_ARRAY = 2,
  
    CUSTOM_TYPE = 5,
    CUSTOM_TYPE_ARRAY = 6,
  
    ENUM = 8,
    ENUM_ARRAY = 9,
  
    GLOBAL_TYPE = 12,
    GLOBAL_TYPE_ARRAY = 13,
  }
  //#endregion