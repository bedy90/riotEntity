import { Interfaces } from '../../../index.js';

/**
 * Interface IParticipant
 *
 * @namespace Spectactor
 * @version v4
 * @name IParticipant
 * @strict
 */
export interface IParticipant_v4 extends Interfaces.Common.IParticipant_Global {
    /**
     * Flag indicating whether or not this participant is a bot
     */
    bot: boolean;
}
