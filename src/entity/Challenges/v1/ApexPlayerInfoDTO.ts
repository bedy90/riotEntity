// --------------------------------------
// Interface
// --------------------------------------
export interface IApexPlayerInfoDTO {
    puuid: string;
    value: number;
    position: number;
}

// --------------------------------------
// Class
// --------------------------------------
export class ApexPlayerInfoDTO implements IApexPlayerInfoDTO {
    puuid!: string;
    value!: number;
    position!: number;

}

// --------------------------------------
// Checker
// --------------------------------------
export class ApexPlayerInfoChecker {
    static isDTO(obj: any): obj is IApexPlayerInfoDTO {
        return (
            'puuid' in obj &&
            'value' in obj &&
            'position' in obj
        );
    }
}
