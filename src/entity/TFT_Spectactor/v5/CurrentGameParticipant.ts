import { Interfaces } from '@/riotentity';
import { IPerks_Global } from '@/src/interface/_Global/IPerks_Global';
import { IGameCustomizationObject_Global } from '@/src/interface/_Global/IGameCustomizationObject_Global';

/**
 * Class CurrentGameParticipant
 *
 * @namespace TFT_Spectactor
 * @version v5
 * @name ICurrentGameParticipant
 */
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
