import { Interfaces } from '@/riotentity';

/**
 * Class Participant_v4
 *
 * @namespace Spectactor
 * @version v4
 * @name IParticipant
 */
export class Participant_v4 implements Interfaces.IParticipant_v4 {
    bot!: boolean;
    spell2Id!: number;
    profileIconId!: number;
    summonerId!: string;
    puuid!: string;
    championId!: number;
    teamId!: number;
    spell1Id!: number;
}
