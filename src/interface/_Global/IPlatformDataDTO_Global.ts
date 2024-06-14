import { IStatusDTO_Global } from './IStatusDTO_Global';

/**
 * Interface IPlatformDataDTO_Global
 *
 * @namespace Global 
 * @version 1
 * @name IPlatformDataDTO_Global
 */
export interface IPlatformDataDTO_Global {
    id: string;

    name: string;

    locales: string[];

    maintenances: IStatusDTO_Global[];

    incidents: IStatusDTO_Global[];
}