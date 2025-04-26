import { Interfaces } from '@/riotentity';
import { IPerks_Global } from '@/interface/_Global/IPerks_Global';
import { IGameCustomizationObject_Global } from '@/interface/_Global/IGameCustomizationObject_Global';

/**
 * Class CurrentGameParticipant_v5
 *
 * @namespace TFT_Spectactor
 * @version v5
 * @name ICurrentGameParticipant
 */
export class CurrentGameParticipant_v5 implements Interfaces.TFT_ICurrentGameParticipant_v5 {
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
