import { Interfaces } from '@/riotentity';

/**
 * Class TournamentDTO
 *
 * @namespace Clash
 * @version v1
 * @name ITournamentDTO
 */
export class TournamentDTO implements Interfaces.Clash.v1.ITournamentDTO {
    id!: number;
    themeId!: number;
    nameKey!: string;
    nameKeySecondary!: string;
    schedule!: Interfaces.Clash.v1.ITournamentPhaseDTO[];
}
