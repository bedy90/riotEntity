import { IGameCustomizationObject_Global } from './IGameCustomizationObject_Global';
import { IPerks_Global } from './IPerks_Global';

/**
 * Interface ICurrentGameParticipant_Global
 *
 * @namespace Global 
 * @version 1
 * @name ICurrentGameParticipant_Global
 */
export interface ICurrentGameParticipant_Global {
    /**
     * 	The ID of the champion played by this participant
     */
    championId: number;

    /**
     * Perks / Runes Reforged Information
     */
    perks: IPerks_Global;

    /**
     * The ID of the profile icon used by this participant
     */
    profileIconId: number;

    /**
     * The team ID of this participant, indicating the participant's team
     */
    teamId: number;

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
    spell1Id: number;

    /**
     * The ID of the second summoner spell used by this participant
     */
    spell2Id: number;

    /**
     * List of Game Customizations
     */
    gameCustomizationObjects: IGameCustomizationObject_Global[];
}
