import { Interfaces } from '@/riotentity';

/**
 * Class ParticipantDTO
 *
 * @namespace TFT_Match
 * @version v1
 * @name IParticipantDTO
 */
export class ParticipantDTO implements Interfaces.TFT_Match.v1.IParticipantDTO {
    companion!: Interfaces.TFT_Match.v1.ICompanionDTO;
    gold_left!: number;
    last_round!: number;
    level!: number;
    placement!: number;
    players_eliminated!: number;
    puuid!: string;
    time_eliminated!: number;
    total_damage_to_players!: number;
    traits!: Interfaces.TFT_Match.v1.ITraitDTO[];
    units!: Interfaces.TFT_Match.v1.IUnitDTO[];
}
