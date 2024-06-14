import { Interfaces } from '@/riotentity';

export function isIMiniSeriesDTO(obj: any): obj is Interfaces.League.v4.IMiniSeriesDTO {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }

    const entityDTO = obj as Interfaces.League.v4.IMiniSeriesDTO;

    const hasFieldsIn: boolean = 'losses' in entityDTO &&
                                'progress' in entityDTO &&
                                'target' in entityDTO &&
                                'wins' in entityDTO;

    const hasFieldCount: boolean = Object.keys(entityDTO).length === 4;

    const hasFieldType: boolean = (
        typeof entityDTO.losses === 'number' &&
        typeof entityDTO.progress === 'string' &&
        typeof entityDTO.target === 'number' &&
        typeof entityDTO.wins === 'number'
    );

    return hasFieldsIn && hasFieldCount && hasFieldType;
}