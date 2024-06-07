import { Interfaces } from '@/riotentity';

export class Participant implements Interfaces.Spectactor.v4.IParticipant {
    bot!: boolean;
    spell2Id!: number;
    profileIconId!: number;
    summonerId!: string;
    puuid!: string;
    championId!: number;
    teamId!: number;
    spell1Id!: number;
}
