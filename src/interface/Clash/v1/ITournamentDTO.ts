import { Interfaces } from "@/riotentity";
/**
 * Interface ITournamentDTO
 * 
 * @namespace Clash
 * @version v1
 * @name ITournamentDTO
 */
export interface ITournamentDTO {
    id: number;

    themeId: number;

    nameKey: string;

    nameKeySecondary: string;

    /**
     * 	Tournament phase
     */
    schedule: Interfaces.Clash.v1.ITournamentPhaseDTO[];
}