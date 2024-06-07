import { Interfaces } from '@/riotentity';
import { IPerks_Global } from '@/src/interface/_Global/IPerks_Global';
import { IGameCustomizationObject_Global } from '@/src/interface/_Global/IGameCustomizationObject_Global';

export class CurrentGameParticipant implements Interfaces.Spectactor.v4.ICurrentGameParticipant {
    bot!: boolean;
    championId!: number;
    perks!: IPerks_Global;
    profileIconId!: number;
    teamId!: number;
    summonerId!: string;
    puuid!: string;
    spell1Id!: number;
    spell2Id!: number;
    gameCustomizationObjects!: IGameCustomizationObject_Global[];
}
