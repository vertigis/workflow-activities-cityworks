import { IApiService } from './i-api-service';
import { CaseTaskServiceTypes as SvcDef } from '../api-interface/CaseTaskService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseTaskService = SvcDef.ICaseTaskService;
export declare class CaseTaskService implements ICaseTaskService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    ByCaObjectId(request: Requests.ByCaObjectId): Promise<Responses.ByCaObjectId>;
    ByIds(request: Requests.ByIds): Promise<Responses.ByIds>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): Promise<Responses.DeleteByCaObjectId>;
    Search(request: Requests.Search): Promise<Responses.Search>;
    SetResult(request: Requests.SetResult): Promise<Responses.SetResult>;
    Update(request: Requests.Update): Promise<Responses.Update>;
}
