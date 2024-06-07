import { Interfaces } from '@/riotentity';
import { IGameCustomizationObject_Global } from '@/src/interface/_Global/IGameCustomizationObject_Global';
import { IPerks_Global } from '@/src/interface/_Global/IPerks_Global';

export class CurrentGameParticipant implements Interfaces.TFT_Spectactor.v5.ICurrentGameParticipant {
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
