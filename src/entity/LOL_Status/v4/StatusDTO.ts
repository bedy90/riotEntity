import { Interfaces } from '@/riotentity';
import { MaintenanceStatus, IncidentSeverity, Platforms } from '@/riotentity';
import { IContentDTO_Global } from '@/interface/_Global/IContentDTO_Global';
import { IUpdateDTO_Global } from '@/interface/_Global/IUpdateDTO_Global';

/**
 * Class StatusDTO_v4
 *
 * @namespace LoL_Status
 * @version v4
 * @name IStatusDTO
 */
export class StatusDTO_v4 implements Interfaces.IStatusDTO_v4 {
    id!: number;
    maintenance_status!: MaintenanceStatus | string;
    incident_severity!: IncidentSeverity | string;
    titles!: IContentDTO_Global[];
    updates!: IUpdateDTO_Global[];
    created_at!: string;
    archive_at!: string;
    updated_at!: string;
    platforms!: Platforms[] | string[];
}
