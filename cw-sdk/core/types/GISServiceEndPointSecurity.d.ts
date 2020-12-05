import { GISServiceSecurity } from './GISServiceSecurity';
import { GISServiceEndPoint } from './GISServiceEndPoint';
import { MobileMapCache } from './MobileMapCache';
export interface GISServiceEndPointSecurity {
    MapCache?: MobileMapCache;
    ServiceEndPoint?: GISServiceEndPoint;
    ServiceSecurity?: GISServiceSecurity;
}
