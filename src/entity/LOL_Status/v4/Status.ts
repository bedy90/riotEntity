import { Platforms } from "@/src/declaration";
import { PublishLocations } from "@/src/declaration";
import { IPlatformDataDTO, IStatusDTO, IContentDTO, IUpdateDTO } from "@/src/interface";
import { IStatusDTO_Global } from "@/src/interface/_Global/IStatusDTO_global";
import { IContentDTO_Global } from "@/src/interface/_Global/IContentDTO_Global";
import { IUpdateDTO_Global } from "@/src/interface/_Global/IUpdateDTO_Global";

export class PlatformDataDTO implements IPlatformDataDTO {
    id!: string;
    name!: string;
    locales!: string[];
    maintenances!: IStatusDTO_Global[];
    incidents!: IStatusDTO_Global[];
}

export class StatusDTO  implements IStatusDTO {
    id!: number;
    maintenance_status!: string;
    incident_severity!: string;
    titles!: IContentDTO_Global[];
    updates!: IUpdateDTO_Global[];
    created_at!: string;
    archive_at!: string;
    updated_at!: string;
    platforms!: string[] | Platforms[];
}

export class ContentDTO implements IContentDTO {
    local!: string;
    content!: string;
}

export class UpdateDTO implements IUpdateDTO {
    id!: number;
    author!: string;
    publish!: boolean;
    publish_locations!: string[] | PublishLocations[];
    translations!: IContentDTO_Global[];
    created_at!: string;
    updated_at!: string;
}

