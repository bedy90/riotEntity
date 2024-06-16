import { Interfaces } from '@/riotentity';

export function isITournamentPhaseDTO(obj: any): obj is Interfaces.Clash.v1.ITournamentPhaseDTO {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }

    const entityDTO = obj as Interfaces.Clash.v1.ITournamentPhaseDTO;

    const hasFieldsIn: boolean = 'id' in entityDTO &&
                                'registrationTime' in entityDTO &&
                                'startTime' in entityDTO &&
                                'cancelled' in entityDTO;

    const hasFieldCount: boolean = Object.keys(entityDTO).length === 4;

    const hasFieldType: boolean = (
        typeof entityDTO.id === 'number' &&
        typeof entityDTO.registrationTime === 'number' &&
        typeof entityDTO.startTime === 'number' &&
        typeof entityDTO.cancelled === 'boolean'
    );

    return hasFieldsIn && hasFieldCount && hasFieldType;
}