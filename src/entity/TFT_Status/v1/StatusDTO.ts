import { Interfaces } from '@/riotentity';
import { MaintenanceStatus, IncidentSeverity, Platforms } from '@/riotentity';
import { IContentDTO_Global } from '@/src/interface/_Global/IContentDTO_Global';
import { IUpdateDTO_Global } from '@/src/interface/_Global/IUpdateDTO_Global';

/**
 * Class StatusDTO
 *
 * @namespace TFT_Status
 * @version v1
 * @name IStatusDTO
 */
export class StatusDTO implements Interfaces.TFT_Status.v1.IStatusDTO {
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
