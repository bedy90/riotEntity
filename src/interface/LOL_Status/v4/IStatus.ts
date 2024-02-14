import { MaintenanceStatus, IncidentSeverity, Platforms, PublishLocations } from "@/src/declaration";

export interface IPlatformDataDto {
    id: string,
    name: string,
    locales: string[],
    maintenances: IStatusDTO[],
    incidents: IStatusDTO[]
}

export interface IStatusDTO {
    id: number,
    /**
     * (Legal values: scheduled, in_progress, complete)
     */
    maintenance_status: MaintenanceStatus, // string,
    /**
     * (Legal values: info, warning, critical)
     */
    incident_severity: IncidentSeverity, // string,
    titles: IContentDto[],
    updates: IUpdateDto[],
    created_at: string,
    archive_at: string,
    updated_at: string,
    /**
     * (Legal values: windows, macos, android, ios, ps4, xbone, switch)
     */
    platforms: Platforms[] // string[]
}

export interface IContentDto {
    local: string,
    content: string
}

export interface IUpdateDto {
    id: number;
    author: string,
    publish: boolean,
    /**
     * (Legal values: riotclient, riotstatus, game)
     */
    publish_locations: PublishLocations[], // string[]
    translations: IContentDto[],
    created_at: string,
    updated_at: string
}

