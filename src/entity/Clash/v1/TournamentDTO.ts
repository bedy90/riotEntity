import { Interfaces } from '@/riotentity';

/**
 * Class TournamentDTO_v1
 *
 * @namespace Clash
 * @version v1
 * @name ITournamentDTO
 */
export class TournamentDTO_v1 implements Interfaces.Clash_ITournamentDTO_v1 {
    id!: number;
    themeId!: number;
    nameKey!: string;
    nameKeySecondary!: string;
    schedule!: Interfaces.Clash_ITournamentPhaseDTO_v1[];
}
