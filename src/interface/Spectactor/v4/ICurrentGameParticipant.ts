import { Interfaces } from '@/riotentity';

/**
 * Interface ICurrentGameParticipant
 *
 * @namespace Spectactor
 * @version v4
 * @name ICurrentGameParticipant
 */
export interface ICurrentGameParticipant_v4 extends Interfaces.Shared.ICurrentGameParticipant_Global {
    bot: boolean;
}
