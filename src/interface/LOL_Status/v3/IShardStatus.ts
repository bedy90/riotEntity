export interface IShardStatus {
    locales: string[];
    hostname: string;
    name: string;
    services: IService[];
    slug: string;
    region_tag: string;
}

export interface IService {
    name: string;
    slug: string;
    status: string;
    incidents: IIncident[];
}

export interface IIncident {
    id: number;
    active: boolean;
    created_at: string;
    updates: IMessage[];
}

export interface IMessage {
    id: string;
    author: string;
    heading: string;
    content: string;
    severity: string;
    created_at: string;
    updated_at: string;
    translations: ITranslation[];
}

export interface ITranslation {
    updated_at: string;
    locale: string;
    content: string;
}