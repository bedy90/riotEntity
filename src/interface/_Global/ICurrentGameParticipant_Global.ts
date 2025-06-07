import { IGameCustomizationObject_Global } from './IGameCustomizationObject_Global';
import { IPerks_Global } from './IPerks_Global';

/**
 * Interface ICurrentGameParticipant_Global
 *
 * @namespace Global
 * @version v1
 * @name ICurrentGameParticipant_Global
 */
export interface ICurrentGameParticipant_Global {
    /**
     * 	The ID of the champion played by this participant
     */
    championId: bigint;

    /**
     * Perks / Runes Reforged Information
     */
    perks: IPerks_Global;

    /**
     * The ID of the profile icon used by this participant
     */
    profileIconId: bigint;

    /**
     * The team ID of this participant, indicating the participant's team
     */
    teamId: bigint;

    /**
     * The encrypted summoner ID of this participant
     */
    summonerId: string;

    /**
     * 	The encrypted puuid of this participant
     */
    puuid: string;

    /**
     * 	The ID of the first summoner spell used by this participant
     */
    spell1Id: bigint;

    /**
     * The ID of the second summoner spell used by this participant
     */
    spell2Id: bigint;

    /**
     * List of Game Customizations
     */
    gameCustomizationObjects: IGameCustomizationObject_Global[];
}
