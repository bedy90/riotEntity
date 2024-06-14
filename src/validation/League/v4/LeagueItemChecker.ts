import { Interfaces, Validator } from '@/riotentity';

export function isILeagueItemDTO(obj: any): obj is Interfaces.League.v4.ILeagueItemDTO {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }

    const entityDTO = obj as Interfaces.League.v4.ILeagueItemDTO;

    const hasFieldsIn: boolean = 'freshBlood' in entityDTO &&
    'wins' in entityDTO &&
    'miniSeries' in entityDTO &&
    'inactive' in entityDTO &&
    'veteran' in entityDTO &&
    'hotStreak' in entityDTO &&
    'rank' in entityDTO &&
    'leaguePoints' in entityDTO &&
    'losses' in entityDTO &&
    'summonerId' in obj;

    const hasFieldCount: boolean = Object.keys(entityDTO).length === 13;

    const hasFieldType: boolean = (
      typeof entityDTO.freshBlood === 'boolean' &&
      typeof entityDTO.wins === 'number' &&
      typeof entityDTO.inactive === 'boolean' &&
      typeof entityDTO.veteran === 'boolean' &&
      typeof entityDTO.hotStreak === 'boolean' &&
      typeof entityDTO.rank === 'string' &&
      typeof entityDTO.leaguePoints === 'number' &&
      typeof entityDTO.losses === 'number' &&
      typeof entityDTO.summonerId === 'string' &&
      typeof entityDTO.miniSeries === 'object'
    );

    const isValidMiniSeries = Validator.League.v4.isIMiniSeriesDTO(entityDTO.miniSeries);

    return hasFieldsIn && hasFieldCount && hasFieldType && isValidMiniSeries;
}
