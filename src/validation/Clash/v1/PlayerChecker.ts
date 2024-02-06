import { Interfaces } from '@/index';

export function isIPlayerDTO(obj: any): obj is Interfaces.Clash.v1.IPlayerDTO {
    return (
        'summonerId' in obj &&
        'teamId' in obj &&
        'position' in obj &&
        'role' in obj
    );
}
