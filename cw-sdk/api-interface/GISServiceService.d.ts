import { GISServiceEndPointSecurity } from '../core/types/GISServiceEndPointSecurity';
import { GISServiceDefinitionBase } from '../core/types/GISServiceDefinitionBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace GISServiceServiceTypes {
    namespace Requests {
        interface AddGISServiceDefinition extends ServiceTypes.CoreRequestBase {
            DashboardUse?: boolean;
            DomainId?: number;
            Name: string;
            ServiceEndPointIds?: number[];
        }
        interface AddGISServiceEndPointSecurity extends ServiceTypes.CoreRequestBase {
            AuthorizationUrl?: string;
            ClientId?: string;
            ClientSecret?: string;
            CreateServiceDefinition?: boolean;
            DomainId?: number;
            ExpandWebMap?: boolean;
            FileName?: string;
            FileSize?: number;
            IsPermanent?: boolean;
            Password?: string;
            SecurityType?: number;
            Service: string;
            ServiceDefinitionName?: string;
            ServiceName: string;
            ServiceType?: number;
            SharingUrl?: string;
            Timeout?: number;
            TokenUrl?: string;
            UserId?: string;
        }
        interface CloneGISServiceDefinition extends ServiceTypes.CoreRequestBase {
            DefinitionId: number;
            Name?: string;
        }
        interface DeleteGISServiceDefinitions extends ServiceTypes.CoreRequestBase {
            DefinitionIds: number[];
        }
        interface DeleteGISServiceEndPointSecurities extends ServiceTypes.CoreRequestBase {
            ServiceIds: number[];
        }
        interface GISServiceDefinitions extends ServiceTypes.CoreRequestBase {
            DashboardUse?: boolean;
            DefinitionId?: number;
            DefinitionIds?: number[];
            DomainId?: number;
            EmployeeSid?: number;
            GroupIds?: number[];
            Names?: string[];
        }
        interface UpdateGISServiceEndPointSecurity extends ServiceTypes.CoreRequestBase {
            AuthorizationUrl?: string;
            ClientId?: string;
            ClientSecret?: string;
            DomainId?: number;
            ExpandWebMap?: boolean;
            FileName?: string;
            FileSize?: number;
            IsPermanent?: boolean;
            Password?: string;
            SecurityType?: number;
            Service?: string;
            ServiceId: number;
            ServiceName?: string;
            ServiceType?: number;
            SharingUrl?: string;
            Timeout?: number;
            TokenUrl?: string;
            UserId?: string;
        }
        interface ValidateServiceSecurity extends ServiceTypes.CoreRequestBase {
            SecurityIds: number[];
        }
    }
    namespace Responses {
        interface AddGISServiceDefinition extends ServiceTypes.CoreResponseBase_<GISServiceDefinitionBase> {
        }
        interface AddGISServiceEndPointSecurity extends ServiceTypes.CoreResponseBase_<GISServiceEndPointSecurity> {
        }
        interface CloneGISServiceDefinition extends ServiceTypes.CoreResponseBase_<GISServiceDefinitionBase> {
        }
        interface DeleteGISServiceDefinitions extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface DeleteGISServiceEndPointSecurities extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface GISServiceDefinitions extends ServiceTypes.CoreResponseBase_<GISServiceDefinitionBase[]> {
        }
        interface UpdateGISServiceEndPointSecurity extends ServiceTypes.CoreResponseBase_<GISServiceEndPointSecurity> {
        }
        interface ValidateServiceSecurity extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
    }
    interface IGISServiceService {
        AddGISServiceDefinition?: (request: Requests.AddGISServiceDefinition) => Promise<Responses.AddGISServiceDefinition>;
        AddGISServiceEndPointSecurity?: (request: Requests.AddGISServiceEndPointSecurity) => Promise<Responses.AddGISServiceEndPointSecurity>;
        CloneGISServiceDefinition?: (request: Requests.CloneGISServiceDefinition) => Promise<Responses.CloneGISServiceDefinition>;
        DeleteGISServiceDefinitions?: (request: Requests.DeleteGISServiceDefinitions) => Promise<Responses.DeleteGISServiceDefinitions>;
        DeleteGISServiceEndPointSecurities?: (request: Requests.DeleteGISServiceEndPointSecurities) => Promise<Responses.DeleteGISServiceEndPointSecurities>;
        GISServiceDefinitions?: (request: Requests.GISServiceDefinitions) => Promise<Responses.GISServiceDefinitions>;
        UpdateGISServiceEndPointSecurity?: (request: Requests.UpdateGISServiceEndPointSecurity) => Promise<Responses.UpdateGISServiceEndPointSecurity>;
        ValidateServiceSecurity?: (request: Requests.ValidateServiceSecurity) => Promise<Responses.ValidateServiceSecurity>;
    }
}
