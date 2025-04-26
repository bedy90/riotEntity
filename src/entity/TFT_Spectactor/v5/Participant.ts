import { Interfaces } from '@/riotentity';

/**
 * Class Participant_v5
 *
 * @namespace TFT_Spectactor
 * @version v5
 * @name IParticipant
 */
export class Participant_v5 implements Interfaces.TFT_IParticipant_v5 {
    spell2Id!: number;
    profileIconId!: number;
    summonerId!: string;
    puuid!: string;
    championId!: number;
    teamId!: number;
    spell1Id!: number;
}
