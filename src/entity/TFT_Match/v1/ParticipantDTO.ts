import { Interfaces } from '@/riotentity';

/**
 * Class ParticipantDTO_v1
 *
 * @namespace TFT_Match
 * @version v1
 * @name IParticipantDTO
 */
export class ParticipantDTO_v1 implements Interfaces.TFT_IParticipantDTO_v1 {
    companion!: Interfaces.TFT_ICompanionDTO_v1;
    gold_left!: number;
    last_round!: number;
    level!: number;
    placement!: number;
    players_eliminated!: number;
    puuid!: string;
    time_eliminated!: number;
    total_damage_to_players!: number;
    traits!: Interfaces.TFT_ITraitDTO_v1[];
    units!: Interfaces.TFT_IUnitDTO_v1[];
}
