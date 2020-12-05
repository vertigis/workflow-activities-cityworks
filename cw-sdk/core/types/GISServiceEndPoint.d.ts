import { GISServiceType } from './GISServiceType';
export interface GISServiceEndPoint {
    AuthorizationUrl?: string;
    ClientId?: string;
    ClientSecret?: string;
    DomainId?: number;
    Service?: string;
    ServiceId?: number;
    ServiceName?: string;
    ServiceType?: GISServiceType;
    SharingUrl?: string;
    Timeout?: number;
    TokenUrl?: string;
}
