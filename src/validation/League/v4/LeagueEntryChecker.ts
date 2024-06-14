import { Interfaces, Validator } from '@/riotentity';

export function isILeagueEntryDTO(obj: any): obj is Interfaces.League.v4.ILeagueEntryDTO {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }

    const entityDTO = obj as Interfaces.League.v4.ILeagueEntryDTO;

    const hasFieldsIn: boolean = 'leagueId' in entityDTO &&
        'summonerId' in entityDTO &&
        'queueType' in entityDTO &&
        'tier' in entityDTO &&
        'rank' in entityDTO &&
        'leaguePoints' in entityDTO &&
        'wins' in entityDTO &&
        'losses' in entityDTO &&
        'hotStreak' in entityDTO &&
        'veteran' in entityDTO &&
        'freshBlood' in entityDTO &&
        'inactive' in entityDTO &&
        'miniSeries' in entityDTO;

    const hasFieldCount: boolean = Object.keys(entityDTO).length === 13;

    const hasFieldType: boolean = (
        typeof entityDTO.leagueId === 'string' &&
        typeof entityDTO.summonerId === 'string' &&
        typeof entityDTO.queueType === 'string' &&
        typeof entityDTO.tier === 'string' &&
        typeof entityDTO.rank === 'string' &&
        typeof entityDTO.leaguePoints === 'number' &&
        typeof entityDTO.wins === 'number' &&
        typeof entityDTO.losses === 'number' &&
        typeof entityDTO.hotStreak === 'boolean' &&
        typeof entityDTO.veteran === 'boolean' &&
        typeof entityDTO.freshBlood === 'boolean' &&
        typeof entityDTO.inactive === 'boolean' &&
        typeof entityDTO.miniSeries === 'object'
    );

    const isValidMiniSeries = Validator.League.v4.isIMiniSeriesDTO(entityDTO.miniSeries);

    return hasFieldsIn && hasFieldCount && hasFieldType && isValidMiniSeries;
}