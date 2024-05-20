import { Interfaces } from '@/riotentity';

export class ShardStatus implements Interfaces.LoL_Status.v3.IShardStatus {
    locales!: string[];
    hostname!: string;
    name!: string;
    services!: Interfaces.LoL_Status.v3.IService[];
    slug!: string;
    region_tag!: string;
}
export class Service implements Interfaces.LoL_Status.v3.IService {
    name!: string;
    slug!: string;
    status!: string;
    incidents!: Interfaces.LoL_Status.v3.IIncident[];
}
export class Incident implements Interfaces.LoL_Status.v3.IIncident {
    id!: number;
    active!: boolean;
    created_at!: string;
    updates!: Interfaces.LoL_Status.v3.IMessage[];
}
export class Message implements Interfaces.LoL_Status.v3.IMessage {
    id!: string;
    author!: string;
    heading!: string;
    content!: string;
    severity!: string;
    created_at!: string;
    updated_at!: string;
    translations!: Interfaces.LoL_Status.v3.ITranslation[];
}
export class Translation implements Interfaces.LoL_Status.v3.ITranslation {
    updated_at!: string;
    locale!: string;
    content!: string;
}
