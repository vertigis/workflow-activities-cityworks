import { GISServiceSecurityType } from './GISServiceSecurityType';
export interface GISServiceSecurity {
    AccessToken?: string;
    Expiration?: Date;
    IsPermanent?: boolean;
    Password?: string;
    RefreshToken?: string;
    SecurityId?: number;
    SecurityName?: string;
    SecurityType?: GISServiceSecurityType;
    ServiceId?: number;
    UserId?: string;
}
