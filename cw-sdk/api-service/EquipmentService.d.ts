import { IApiService } from './i-api-service';
import { EquipmentServiceTypes as SvcDef } from '../api-interface/EquipmentService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IEquipmentService = SvcDef.IEquipmentService;
export declare class EquipmentService implements IEquipmentService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    All(request: Requests.All): Promise<Responses.All>;
    ById(request: Requests.ById): Promise<Responses.ById>;
    ByIds(request: Requests.ByIds): Promise<Responses.ByIds>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    Search(request: Requests.Search): Promise<Responses.Search>;
    Update(request: Requests.Update): Promise<Responses.Update>;
}
