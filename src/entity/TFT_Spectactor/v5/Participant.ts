import { Interfaces } from '@/riotentity';

export class Participant implements Interfaces.TFT_Spectactor.v5.IParticipant {
    spell2Id!: number;
    profileIconId!: number;
    summonerId!: string;
    puuid!: string;
    championId!: number;
    teamId!: number;
    spell1Id!: number;
}
