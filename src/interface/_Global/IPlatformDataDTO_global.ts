import { IStatusDTO_Global } from "./IStatusDTO_global";

export interface IPlatformDataDTO_Global {
    id: string;

    name: string;

    locales: string[];

    maintenances: IStatusDTO_Global[];

    incidents: IStatusDTO_Global[];
}