// eslint-disable max-len
// eslint-disable no-shadow
import { Interfaces } from '@/riotentity';

/**
 * Interface TFT - IInfoDTO
 *
 * @namespace TFT_Match
 * @version v1
 * @name IInfoDTO
 * @prefix TFT_
 */
export interface IInfoDTO_v1 {
    /**
     * 	Unix timestamp.
     */
    game_datetime: number;

    /**
     * Game length in seconds.
     */
    game_length: number;

    /**
     * 	Game variation key. Game variations documented in TFT static data.
     */
    game_variation: string;

    game_version: string;

    participants: Interfaces.ITFT_ParticipantDTO_v1[];

    /**
     * 	Please refer to the League of Legends documentation.
     */
    queueId: number;

    /**
     * Teamfight Tactics set number.
     */
    tft_set_number: number;
}