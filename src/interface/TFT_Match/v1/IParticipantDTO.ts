// eslint-disable max-len
// eslint-disable no-shadow
import { Interfaces } from '../../../index.js';

/**
 * Interface TFT - IParticipantDTO
 *
 * @namespace TFT_Match
 * @version v1
 * @name IParticipantDTO
 * @prefix TFT_
 * @strict
 */
export interface IParticipantDTO_v1 {
    /**
     * 	Participant's companion.
     */
    companion: Interfaces.ITFT_CompanionDTO_v1;

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

    // TODO
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
    traits: Interfaces.ITFT_TraitDTO_v1[];

    /**
     * A list of active units for the participant.
     */
    units: Interfaces.ITFT_UnitDTO_v1[];
}