import { Interfaces } from '@/riotentity';

/**
 * Class TeamDTO_v1
 *
 * @namespace Clash
 * @version v1
 * @name ITeamDTO
 */
export class TeamDTO_v1 implements Interfaces.Clash_ITeamDTO_v1 {
    id!: string;
    tournamentId!: number;
    name!: string;
    iconId!: number;
    tier!: number;
    captain!: string;
    abbreviation!: string;
    players!: Interfaces.Clash_IPlayerDTO_v1[];
}
