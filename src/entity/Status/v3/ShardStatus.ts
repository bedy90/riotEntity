import { Interfaces } from '@/riotentity';

export class ShardStatus implements Interfaces.Status.v3.IShardStatus {
    locales!: string[];
    hostname!: string;
    name!: string;
    services!: Interfaces.Status.v3.IService[];
    slug!: string;
    region_tag!: string;
}
export class Service implements Interfaces.Status.v3.IService {
    name!: string;
    slug!: string;
    status!: string;
    incidents!: Interfaces.Status.v3.IIncident[];
}
export class Incident implements Interfaces.Status.v3.IIncident {
    id!: number;
    active!: boolean;
    created_at!: string;
    updates!: Interfaces.Status.v3.IMessage[];
}
export class Message implements Interfaces.Status.v3.IMessage {
    id!: string;
    author!: string;
    heading!: string;
    content!: string;
    severity!: string;
    created_at!: string;
    updated_at!: string;
    translations!: Interfaces.Status.v3.ITranslation[];
}
export class Translation implements Interfaces.Status.v3.ITranslation {
    updated_at!: string;
    locale!: string;
    content!: string;
}
