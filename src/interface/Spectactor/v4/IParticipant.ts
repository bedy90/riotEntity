import { Interfaces } from '../../../index.js';

/**
 * Interface IParticipant
 *
 * @namespace Spectactor
 * @version v4
 * @name IParticipant
 */
export interface IParticipant_v4 extends Interfaces.Shared.IParticipant_Global {
    /**
     * Flag indicating whether or not this participant is a bot
     */
    bot: boolean;
}
