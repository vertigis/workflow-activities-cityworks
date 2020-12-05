import { IApiService } from './i-api-service';
import { MapServiceServiceTypes as SvcDef } from '../api-interface/MapServiceService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IMapServiceService = SvcDef.IMapServiceService;
export declare class MapServiceService implements IMapServiceService {
    private _service;
    constructor(service: IApiService);
    Configuration(request: Requests.Configuration): Promise<Responses.Configuration>;
    Domain(request: Requests.Domain): Promise<Responses.Domain>;
    DownloadMobileMapCache(request: Requests.DownloadMobileMapCache): Promise<Responses.DownloadMobileMapCache>;
    InitialExtent(request: Requests.InitialExtent): Promise<Responses.InitialExtent>;
    InspectionConfiguration(request: Requests.InspectionConfiguration): Promise<Responses.InspectionConfiguration>;
    ServiceRequestConfiguration(request: Requests.ServiceRequestConfiguration): Promise<Responses.ServiceRequestConfiguration>;
    User(request: Requests.User): Promise<Responses.User>;
    WorkOrderConfiguration(request: Requests.WorkOrderConfiguration): Promise<Responses.WorkOrderConfiguration>;
}
