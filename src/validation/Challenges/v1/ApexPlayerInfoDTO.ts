import { Interfaces } from '@/index';

export function isIApexPlayerInfoDTO(obj: any): obj is Interfaces.Challenges.v1.IApexPlayerInfoDTO {
    return (
        'puuid' in obj &&
        'value' in obj &&
        'position' in obj
    );
}
