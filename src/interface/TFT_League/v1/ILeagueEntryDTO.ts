import { Interfaces } from '@/riotentity';

/**
 * Interface TFT - ILeagueEntryDTO
 *
 * @namespace TFT_League
 * @version v1
 * @name ILeagueEntryDTO
 * @prefix TFT_
 */
export interface ILeagueEntryDTO_v1 extends Interfaces.Shared.ILeagueEntryDTO_Global {
    /**
     * 	Player Universal Unique Identifier. Exact length of 78 characters. (Encrypted)
     */
    puuid: string;

    /**
     * Only included for the RANKED_TFT_TURBO queueType. (Legal values: ORANGE, PURPLE, BLUE, GREEN, GRAY)
     */
    ratedTier: string;

    /**
     * Only included for the RANKED_TFT_TURBO queueType.
     */
    ratedRating: string;

    //  /**
    //  * Not included for the RANKED_TFT_TURBO queueType.
    //  */
    // miniSeries: IMiniSeriesDTO;
}
