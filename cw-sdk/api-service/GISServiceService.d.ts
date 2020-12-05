import { IApiService } from './i-api-service';
import { GISServiceServiceTypes as SvcDef } from '../api-interface/GISServiceService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IGISServiceService = SvcDef.IGISServiceService;
export declare class GISServiceService implements IGISServiceService {
    private _service;
    constructor(service: IApiService);
    AddGISServiceDefinition(request: Requests.AddGISServiceDefinition): Promise<Responses.AddGISServiceDefinition>;
    AddGISServiceEndPointSecurity(request: Requests.AddGISServiceEndPointSecurity): Promise<Responses.AddGISServiceEndPointSecurity>;
    CloneGISServiceDefinition(request: Requests.CloneGISServiceDefinition): Promise<Responses.CloneGISServiceDefinition>;
    DeleteGISServiceDefinitions(request: Requests.DeleteGISServiceDefinitions): Promise<Responses.DeleteGISServiceDefinitions>;
    DeleteGISServiceEndPointSecurities(request: Requests.DeleteGISServiceEndPointSecurities): Promise<Responses.DeleteGISServiceEndPointSecurities>;
    GISServiceDefinitions(request: Requests.GISServiceDefinitions): Promise<Responses.GISServiceDefinitions>;
    UpdateGISServiceEndPointSecurity(request: Requests.UpdateGISServiceEndPointSecurity): Promise<Responses.UpdateGISServiceEndPointSecurity>;
    ValidateServiceSecurity(request: Requests.ValidateServiceSecurity): Promise<Responses.ValidateServiceSecurity>;
}
