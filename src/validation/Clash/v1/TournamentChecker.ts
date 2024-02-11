import { Interfaces } from '@/riotentity';

export function isITournamentDTO(obj: any): obj is Interfaces.Clash.v1.ITournamentDTO {
    return (
        'id' in obj &&
        'themeId' in obj &&
        'nameKey' in obj &&
        'nameKeySecondary' in obj &&
        'schedule' in obj
    );
}


export function isITournamentPhaseDTO(obj: any): obj is Interfaces.Clash.v1.ITournamentPhaseDTO {
    return (
        'id' in obj &&
        'registrationTime' in obj &&
        'startTime' in obj &&
        'cancelled' in obj
    );
}
