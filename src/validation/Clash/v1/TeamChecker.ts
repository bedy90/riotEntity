import { Interfaces, Validator } from '@/riotentity';

export function isITeamDTO(obj: any): obj is Interfaces.Clash.v1.ITeamDTO {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }

    const entityDTO = obj as Interfaces.Clash.v1.ITeamDTO;

    const hasFieldsIn: boolean = 'id' in entityDTO &&
                                'tournamentId' in entityDTO &&
                                'name' in entityDTO &&
                                'iconId' in entityDTO &&
                                'tier' in entityDTO &&
                                'captain' in entityDTO &&
                                'abbreviation' in entityDTO &&
                                'players' in entityDTO;

    const hasFieldCount: boolean = Object.keys(entityDTO).length === 8;

    const hasFieldType: boolean = (
        typeof entityDTO.id === 'string' &&
        typeof entityDTO.tournamentId === 'number' &&
        typeof entityDTO.name === 'string' &&
        typeof entityDTO.iconId === 'number' &&
        typeof entityDTO.tier === 'number' &&
        typeof entityDTO.captain === 'string' &&
        typeof entityDTO.abbreviation === 'string' &&
        Array.isArray(entityDTO.players)
    );

    const isPlayersValid = entityDTO.players.every(Validator.Clash.v1.isIPlayerDTO);

    return hasFieldsIn && hasFieldCount && hasFieldType && isPlayersValid;
}