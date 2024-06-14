import { Interfaces, Validator } from '@/riotentity';

export function isILeagueListDTO(obj: any): obj is Interfaces.League.v4.ILeagueListDTO {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }

    const entityDTO = obj as Interfaces.League.v4.ILeagueListDTO;

    const hasFieldsIn: boolean = 'leagueId' in entityDTO &&
    'entries' in entityDTO &&
    'tier' in entityDTO &&
    'name' in entityDTO &&
    'queue' in entityDTO;

    const hasFieldCount: boolean = Object.keys(entityDTO).length === 13;

    const hasFieldType: boolean = (
        typeof entityDTO.leagueId === 'string' &&
        Array.isArray(entityDTO.entries) &&
        typeof entityDTO.tier === 'string' &&
        typeof entityDTO.name === 'string' &&
        typeof entityDTO.queue === 'string'
    );

    const isEntriesValid = entityDTO.entries.every(Validator.League.v4.isILeagueEntryDTO);

    return hasFieldsIn && hasFieldCount && hasFieldType && isEntriesValid;
}
