/* eslint-disable max-len */
/* eslint-disable no-shadow */
import { TraitStyle, Interfaces } from '@/riotentity';

/**
 * Interface TFT - IMatchDTO
 * 
 * @namespace TFT_Match
 * @version v1
 * @name IMatchDTO
 */
export interface IMatchDTO {
    /**
     * Match metadata.
     */
    metadata: Interfaces.TFT_Match.v1.IMetadataDTO;

    /**
     * Match info.
     */
    info: Interfaces.TFT_Match.v1.IInfoDTO;
}

/**
 * Interface TFT - IMetadataDTO
 * 
 * @namespace TFT_Match
 * @version v1
 * @name IMetadataDTO
 */
export interface IMetadataDTO {
    /**
     * 	Match data version.
     */
    dataVersion: string;

    /**
     * Match id.
     */
    matchId: string;

    /**
     * A list of participant PUUIDs.
     */
    participants: string[];
}

/**
 * Interface TFT - IInfoDTO
 * 
 * @namespace TFT_Match
 * @version v1
 * @name IInfoDTO
 */
export interface IInfoDTO {
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

    participants: Interfaces.TFT_Match.v1.IParticipantDTO[];

    /**
     * 	Please refer to the League of Legends documentation.
     */
    queueId: number;

    /**
     * Teamfight Tactics set number.
     */
    tft_set_number: number;
}

/**
 * Interface TFT - IParticipantDTO
 * 
 * @namespace TFT_Match
 * @version v1
 * @name IParticipantDTO
 */
export interface IParticipantDTO {
    /**
     * 	Participant's companion.
     */
    companion: Interfaces.TFT_Match.v1.ICompanionDTO;

    /**
     * Gold left after participant was eliminated.
     */
    gold_left: number;

    /**
     * The round the participant was eliminated in. Note: If the player was eliminated in stage 2-1 their last_round would be 5.
     */
    last_round: number;

    /**
     * Participant Little Legend level. Note: This is not the number of active units.
     */
    level: number;

    /**
     * Participant placement upon elimination.
     */
    placement: number;

    /**
     * Number of players the participant eliminated.
     */
    players_eliminated: number;

    puuid: string;

    /**
     * The number of seconds before the participant was eliminated.
     */
    time_eliminated: number;

    /**
     * Damage the participant dealt to other players.
     */
    total_damage_to_players: number;

    /**
     * A complete list of traits for the participant's active units.
     */
    traits: Interfaces.TFT_Match.v1.ITraitDTO[];

    /**
     * A list of active units for the participant.
     */
    units: Interfaces.TFT_Match.v1.IUnitDTO[];
}

/**
 * Interface TFT - ICompanionDTO
 * 
 * @namespace TFT_Match
 * @version v1
 * @name ICompanionDTO
 */
export interface ICompanionDTO {
    content_ID: string;

    item_ID: number;

    skin_ID: number;

    species: string;
}

/**
 * Interface TFT - ITraitDTO
 * 
 * @namespace TFT_Match
 * @version v1
 * @name ITraitDTO
 */
export interface ITraitDTO {
    /**
     * 	Trait name.
     */
    name: string;

    /**
     * Number of units with this trait.
     */
    num_units: number;

    /**
     * 	Current style for this trait. (0 = No style, 1 = Bronze, 2 = Silver, 3 = Gold, 4 = Chromatic)
     */
    style: TraitStyle | number;
    /**
     * 	Current active tier for the trait.
     */
    tier_current: number;
    /**
     * Total tiers for the trait.
     */
    tier_total: number;

}

/**
 * Interface TFT - IUnitDTO
 * 
 * @namespace TFT_Match
 * @version v1
 * @name IUnitDTO
 */
export interface IUnitDTO {
    /**
     * A list of the unit's items. Please refer to the Teamfight Tactics documentation for item ids.
     */
    items: number[];

    /**
     * This field was introduced in patch 9.22 with data_version 2.
     */
    character_id: string;

    /**
     * If a unit is chosen as part of the Fates set mechanic, the chosen trait will be indicated by this field. Otherwise this field is excluded from the response.
     */
    chosen: string;

    /**
     * 	Unit name. This field is often left blank.
     */
    name: string;

    /**
     * Unit rarity. This doesn't equate to the unit cost.
     */
    rarity: number;

    /**
     * Unit tier.
     */
    tier: number;

}

