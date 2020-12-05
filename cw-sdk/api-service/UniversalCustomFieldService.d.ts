import { IApiService } from './i-api-service';
import { UniversalCustomFieldServiceTypes as SvcDef } from '../api-interface/UniversalCustomFieldService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IUniversalCustomFieldService = SvcDef.IUniversalCustomFieldService;
export declare class UniversalCustomFieldService implements IUniversalCustomFieldService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    ById(request: Requests.ById): Promise<Responses.ById>;
    ByType(request: Requests.ByType): Promise<Responses.ByType>;
    Contract(request: Requests.Contract): Promise<Responses.Contract>;
    CustomerCall(request: Requests.CustomerCall): Promise<Responses.CustomerCall>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    Inspection(request: Requests.Inspection): Promise<Responses.Inspection>;
    MoveField(request: Requests.MoveField): Promise<Responses.MoveField>;
    ServiceRequest(request: Requests.ServiceRequest): Promise<Responses.ServiceRequest>;
    Update(request: Requests.Update): Promise<Responses.Update>;
    WorkOrder(request: Requests.WorkOrder): Promise<Responses.WorkOrder>;
}
