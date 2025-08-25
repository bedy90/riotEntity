// eslint-disable max-len
// eslint-disable no-shadow
import { Interfaces } from '../../../index.js';

/**
 * Interface IInfoDTO
 *
 * @namespace Match
 * @version v5
 * @name IInfoDTO
 * @strict
 */
export interface IInfoDTO_v5 {
    /**
     * Refer to indicate if the game ended in termination.
     */
    endOfGameResult: string;

    /**
     * Unix timestamp for when the game is created on the game server (i.e., the loading screen).
     */
    gameCreation: bigint;

    /**
     * Prior to patch 11.20, this field returns the game length in milliseconds calculated from gameEndTimestamp - gameStartTimestamp.
     * Post patch 11.20, this field returns the max timePlayed of any participant in the game in seconds, which makes the behavior of this
     * field consistent with that of match-v4. The best way to handling the change in this field is to treat the value as milliseconds if
     * the gameEndTimestamp field isn't in the response and to treat the value as seconds if gameEndTimestamp is in the response.
     */
    gameDuration: bigint;

    /**
     * 	Unix timestamp for when match ends on the game server. This timestamp can occasionally be significantly longer than when
     * the match "ends". The most reliable way of determining the timestamp for the end of the match would be to add the max time
     *  played of any participant to the gameStartTimestamp. This field was added to match-v5 in patch 11.20 on Oct 5th, 2021.
     */
    gameEndTimestamp: bigint;

    gameId: bigint;

    /**
     * Refer to the Game Constants documentation.
     */
    gameMode: string;

    gameName: string;

    /**
     * 	Unix timestamp for when match starts on the game server.
     */
    gameStartTimestamp: bigint;

    gameType: string;

    /**
     * The first two parts can be used to determine the patch a game was played on.
     */
    gameVersion: string;

    /**
     * Refer to the Game Constants documentation.
     */
    mapId: number;

    participants: Interfaces.IParticipantDTO_v5[];

    /**
     * Platform where the match was played.
     */
    platformId: string;

    /**
     * Refer to the Game Constants documentation.
     */
    queueId: number;

    teams: Interfaces.ITeamDTO_v5[];

    /**
     * Tournament code used to generate the match. This field was added to match-v5 in patch 11.13 on June 23rd, 2021.
     */
    tournamentCode: string;
}
