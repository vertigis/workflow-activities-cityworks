import { EsriExtent } from '../core/types/EsriExtent';
import { SimpleGisServiceInfo } from '../core/types/SimpleGisServiceInfo';
import { ServiceTypes } from '../core/service-types';
export declare namespace MapServiceServiceTypes {
    namespace Requests {
        interface Configuration extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            GroupId?: number;
            MapServiceId?: number;
            Security?: string[];
            UserId?: number;
        }
        interface Domain extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
        }
        interface DownloadMobileMapCache extends ServiceTypes.CoreRequestBase {
            MobileMapCacheId?: number;
        }
        interface InitialExtent extends ServiceTypes.CoreRequestBase {
        }
        interface InspectionConfiguration extends ServiceTypes.CoreRequestBase {
            InspectionId?: number;
        }
        interface ServiceRequestConfiguration extends ServiceTypes.CoreRequestBase {
            RequestId?: number;
        }
        interface User extends ServiceTypes.CoreRequestBase {
            AllDomains?: boolean;
            AllGroups?: boolean;
            Security?: string[];
        }
        interface WorkOrderConfiguration extends ServiceTypes.CoreRequestBase {
            WorkOrderSid?: number;
        }
    }
    namespace Responses {
        interface Configuration extends ServiceTypes.CoreResponseBase_<SimpleGisServiceInfo[]> {
        }
        interface Domain extends ServiceTypes.CoreResponseBase_<SimpleGisServiceInfo[]> {
        }
        interface DownloadMobileMapCache extends ServiceTypes.CoreResponseBase {
        }
        interface InitialExtent extends ServiceTypes.CoreResponseBase_<EsriExtent> {
        }
        interface InspectionConfiguration extends ServiceTypes.CoreResponseBase_<SimpleGisServiceInfo[]> {
        }
        interface ServiceRequestConfiguration extends ServiceTypes.CoreResponseBase_<SimpleGisServiceInfo[]> {
        }
        interface User extends ServiceTypes.CoreResponseBase_<SimpleGisServiceInfo[]> {
        }
        interface WorkOrderConfiguration extends ServiceTypes.CoreResponseBase_<SimpleGisServiceInfo[]> {
        }
    }
    interface IMapServiceService {
        Configuration?: (request: Requests.Configuration) => Promise<Responses.Configuration>;
        Domain?: (request: Requests.Domain) => Promise<Responses.Domain>;
        DownloadMobileMapCache?: (request: Requests.DownloadMobileMapCache) => Promise<Responses.DownloadMobileMapCache>;
        InitialExtent?: (request: Requests.InitialExtent) => Promise<Responses.InitialExtent>;
        InspectionConfiguration?: (request: Requests.InspectionConfiguration) => Promise<Responses.InspectionConfiguration>;
        ServiceRequestConfiguration?: (request: Requests.ServiceRequestConfiguration) => Promise<Responses.ServiceRequestConfiguration>;
        User?: (request: Requests.User) => Promise<Responses.User>;
        WorkOrderConfiguration?: (request: Requests.WorkOrderConfiguration) => Promise<Responses.WorkOrderConfiguration>;
    }
}
