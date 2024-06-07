import { ICurrentGameInfo_Global } from '../../_Global/ICurrentGameInfo_Global';
import { ICurrentGameParticipant_Global } from '../../_Global/ICurrentGameParticipant_Global';
import { IGameCustomizationObject_Global } from '../../_Global/IGameCustomizationObject_Global';
import { IPerks_Global } from '../../_Global/IPerks_Global';

/**
 * Interface ICurrentGameInfo
 *
 * @namespace Spectactor
 * @version v4
 * @name ICurrentGameInfo
 */
export type ICurrentGameInfo = ICurrentGameInfo_Global
/*
export interface ICurrentGameInfo extends ICurrentGameInfo_Global {
}

*/

/**
 * Interface ICurrentGameParticipant
 *
 * @namespace Spectactor
 * @version v4
 * @name ICurrentGameParticipant
 */
export interface ICurrentGameParticipant extends ICurrentGameParticipant_Global {
    bot: boolean;
}

/**
 * Interface IPerks
 *
 * @namespace Spectactor
 * @version v4
 * @name IPerks
 */
export type IPerks = IPerks_Global
/*
export interface IPerks extends IPerks_Global {
}

*/

/**
 * Interface IGameCustomizationObject
 *
 * @namespace Spectactor
 * @version v4
 * @name IGameCustomizationObject
 */
export type IGameCustomizationObject = IGameCustomizationObject_Global
/*
export interface IGameCustomizationObject extends IGameCustomizationObject_Global {
}
*/
