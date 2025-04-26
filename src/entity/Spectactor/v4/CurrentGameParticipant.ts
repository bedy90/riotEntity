import { Interfaces } from '@/riotentity';
import { IPerks_Global } from '@/interface/_Global/IPerks_Global';
import { IGameCustomizationObject_Global } from '@/interface/_Global/IGameCustomizationObject_Global';

/**
 * Class CurrentGameParticipant_v4
 *
 * @namespace Spectactor
 * @version v4
 * @name ICurrentGameParticipant
 */
export class CurrentGameParticipant_v4 implements Interfaces.ICurrentGameParticipant_v4 {
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
