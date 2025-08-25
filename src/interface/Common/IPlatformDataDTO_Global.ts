import { IStatusDTO_Global } from './IStatusDTO_Global.js';

/**
 * Interface IPlatformDataDTO_Global
 *
 * @namespace Global
 * @version v1
 * @name IPlatformDataDTO_Global
 * @strict
 */
export interface IPlatformDataDTO_Global {
    id: string;

    name: string;

    locales: string[];

    maintenances: IStatusDTO_Global[];

    incidents: IStatusDTO_Global[];
}