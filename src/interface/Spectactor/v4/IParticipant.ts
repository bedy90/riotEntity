import { IParticipant_Global } from '../../_Global/IParticipant_Global';

/**
 * Interface IParticipant
 *
 * @namespace Spectactor
 * @version v4
 * @name IParticipant
 */
export interface IParticipant_v4 extends IParticipant_Global {
    /**
     * Flag indicating whether or not this participant is a bot
     */
    bot: boolean;
}