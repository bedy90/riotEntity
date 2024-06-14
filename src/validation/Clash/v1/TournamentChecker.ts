import { Interfaces } from '@/riotentity';

export function isITournamentDTO(obj: any): obj is Interfaces.Clash.v1.ITournamentDTO {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }

    const entityDTO = obj as Interfaces.Clash.v1.ITournamentDTO;

    const hasFieldsIn: boolean = 'id' in entityDTO &&
        'themeId' in entityDTO &&
        'nameKey' in entityDTO &&
        'nameKeySecondary' in entityDTO &&
        'schedule' in entityDTO;
    const hasFieldCount: boolean = Object.keys(entityDTO).length === 5;

    const hasFieldType: boolean = (
        typeof entityDTO.id === 'number' &&
        typeof entityDTO.themeId === 'number' &&
        typeof entityDTO.nameKey === 'string' &&
        typeof entityDTO.nameKeySecondary === 'string' &&
        Array.isArray(entityDTO.schedule)
    );

    return hasFieldsIn && hasFieldCount && hasFieldType;
}