import { Interfaces } from '@/riotentity';
import { MaintenanceStatus, IncidentSeverity, Platforms } from '@/riotentity';
import { IContentDTO_Global } from '@/interface/_Global/IContentDTO_Global';
import { IUpdateDTO_Global } from '@/interface/_Global/IUpdateDTO_Global';

/**
 * Class StatusDTO_v1
 *
 * @namespace TFT_Status
 * @version v1
 * @name IStatusDTO
 */
export class StatusDTO_v1 implements Interfaces.TFT_IStatusDTO_v1 {
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
