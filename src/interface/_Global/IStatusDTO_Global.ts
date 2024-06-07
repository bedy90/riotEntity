import { MaintenanceStatus, IncidentSeverity, Platforms } from '@/src/declaration';
import { IContentDTO_Global } from './IContentDTO_Global';
import { IUpdateDTO_Global } from './IUpdateDTO_Global';

/**
 * Interface IStatusDTO_Global
 *
 * @namespace Global
 * @name IStatusDTO_Global
 */
export interface IStatusDTO_Global {
    id: number;

    /**
     * (Legal values: scheduled; in_progress; complete)
     */
    maintenance_status: MaintenanceStatus | string;

    /**
     * (Legal values: info; warning; critical)
     */
    incident_severity: IncidentSeverity | string;

    titles: IContentDTO_Global[];

    updates: IUpdateDTO_Global[];

    created_at: string;

    archive_at: string;

    updated_at: string;

    /**
     * (Legal values: windows; macos; android; ios; ps4; xbone; switch)
     */
    platforms: Platforms[] | string[];
}