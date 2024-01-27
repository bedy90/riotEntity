// --------------------------------------
// Interface
// --------------------------------------
export interface ISummonerDTO {
    /**
     * 	Encrypted account ID. Max length 56 characters.
     */
    accountId: string;
    /**
     * 	ID of the summoner icon associated with the summoner
     */
    profileIconId: number;
    /**
     * Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: profile icon change, playing the tutorial or advanced tutorial, finishing a game, summoner name change
     */
    revisionDate?: number;
    /**
     * Summoner name.
     */
    name: string;
    /**
     * Encrypted summoner ID. Max length 63 characters.
     */
    id: string;
    /**
     * Encrypted PUUID. Exact length of 78 characters.
     */
    puuid: string;
    /**
     * Summoner level associated with the summoner.
     */
    summonerLevel: number;
}

// --------------------------------------
// Class
// --------------------------------------
export class SummonerDTO implements ISummonerDTO {
    accountId!: string; // = '';
    profileIconId!: number; // = 0;
    revisionDate!: number; // = 0;
    name!: string; // = '';
    id!: string; // = '';
    puuid!: string; // = '';
    summonerLevel!: number; // = 0;
}

// --------------------------------------
// Checker
// --------------------------------------
export class SummonerChecker {
    static isSummonerDTO(obj: any): obj is ISummonerDTO {
        return (
            'accountId' in obj &&
            'profileIconId' in obj &&
            'revisionDate' in obj &&
            'name' in obj &&
            'id' in obj &&
            'puuid' in obj &&
            'summonerLevel' in obj
        );
    }
}
