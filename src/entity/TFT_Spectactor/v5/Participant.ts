import { Interfaces } from '@/riotentity';

/**
 * Class Participant
 *
 * @namespace TFT_Spectactor
 * @version v5
 * @name IParticipant
 */
export class Participant implements Interfaces.TFT_Spectactor.v5.IParticipant {
    spell2Id!: number;
    profileIconId!: number;
    summonerId!: string;
    puuid!: string;
    championId!: number;
    teamId!: number;
    spell1Id!: number;
}
