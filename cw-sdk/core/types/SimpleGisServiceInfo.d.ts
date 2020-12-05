import { GISServiceType } from './GISServiceType';
export interface SimpleGisServiceInfo {
    Active?: boolean;
    DefinitionId?: number;
    DomainId?: number;
    MobileSync?: boolean;
    RefreshInterval?: number;
    Security?: string[];
    SecurityId?: number;
    SequenceId?: number;
    Service?: string;
    ServiceId?: number;
    ServiceName?: string;
    ServiceType?: GISServiceType;
    SharingUrl?: string;
    TokenRequired?: boolean;
}
