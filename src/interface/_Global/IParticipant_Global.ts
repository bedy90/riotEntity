/**
 * Interface IParticipant_Global
 *
 * @namespace Global 
 * @version 1
 * @name IParticipant_Global
 */
export interface IParticipant_Global {
    /**
     * The ID of the second summoner spell used by this participant
     */
    spell2Id: number;

    /**
     * The ID of the profile icon used by this participant
     */
    profileIconId: number;

    /**
     * Encrypted summoner ID of this participant
     */
    summonerId: string;

    /**
     * 	Encrypted puuid of this participant
     */
    puuid: string;

    /**
     * The ID of the champion played by this participant
     */
    championId: number;

    /**
     * The team ID of this participant, indicating the participant's team
     */
    teamId: number;

    /**
     * The ID of the first summoner spell used by this participant
     */
    spell1Id: number;
}