/**
 * Interface IParticipant_Global
 *
 * @namespace Global
 * @version v1
 * @name IParticipant_Global
 */
export interface IParticipant_Global {
    /**
     * The ID of the second summoner spell used by this participant
     */
    spell2Id: bigint;

    /**
     * The ID of the profile icon used by this participant
     */
    profileIconId: bigint;

    /**
     * Encrypted summoner ID of this participant
     */
    summonerId: string;

    /**
     * Encrypted puuid of this participant
     */
    puuid: string;

    /**
     * The ID of the champion played by this participant
     */
    championId: bigint;

    /**
     * The team ID of this participant, indicating the participant's team
     */
    teamId: bigint;

    /**
     * The ID of the first summoner spell used by this participant
     */
    spell1Id: bigint;
}