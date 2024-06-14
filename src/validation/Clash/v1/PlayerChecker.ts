import { Interfaces } from '@/riotentity';
import { ClashPosition, ClashRole } from '@/src/declaration';

export function isIPlayerDTO(obj: any): obj is Interfaces.Clash.v1.IPlayerDTO {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }

    const entityDTO = obj as Interfaces.Clash.v1.IPlayerDTO;

    const hasFieldsIn: boolean = 'summonerId' in entityDTO &&
        'teamId' in entityDTO &&
        'position' in entityDTO &&
        'role' in entityDTO;

    const hasFieldCount: boolean = Object.keys(entityDTO).length === 4;

    const hasFieldType: boolean = (
        typeof entityDTO.summonerId === 'string' &&
        typeof entityDTO.teamId === 'string' &&
        (Object.values(ClashPosition).includes(obj.position) ||
                        typeof entityDTO.position === 'string') &&
        (Object.values(ClashRole).includes(obj.role) ||
                        typeof entityDTO.role === 'string')
    );

    return hasFieldsIn && hasFieldCount && hasFieldType;
}