import { Interfaces } from '@/riotentity';

export function isITeamDTO(obj: any): obj is Interfaces.Clash.v1.ITeamDTO {
    return (
        'id' in obj &&
        'tournamentId' in obj &&
        'name' in obj &&
        'iconId' in obj &&
        'tier' in obj &&
        'captain' in obj &&
        'abbreviation' in obj &&
        'players' in obj
    );
}
