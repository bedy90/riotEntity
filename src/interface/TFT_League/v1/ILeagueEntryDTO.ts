import { ILeagueEntryDTO_Global } from '../../_Global/ILeagueEntryDTO_global';
// import { IMiniSeriesDTO } from './IMiniSeriesDTO';

export interface ILeagueEntryDTO  extends ILeagueEntryDTO_Global {
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
