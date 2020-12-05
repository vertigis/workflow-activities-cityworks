import { IApiService } from './i-api-service';
import { CaseViolationsServiceTypes as SvcDef } from '../api-interface/CaseViolationsService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseViolationsService = SvcDef.ICaseViolationsService;
export declare class CaseViolationsService implements ICaseViolationsService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    ByCaObjectId(request: Requests.ByCaObjectId): Promise<Responses.ByCaObjectId>;
    ByCaObjectIds(request: Requests.ByCaObjectIds): Promise<Responses.ByCaObjectIds>;
    ByIds(request: Requests.ByIds): Promise<Responses.ByIds>;
    CompleteViolations(request: Requests.CompleteViolations): Promise<Responses.CompleteViolations>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): Promise<Responses.DeleteByCaObjectId>;
    Search(request: Requests.Search): Promise<Responses.Search>;
}
