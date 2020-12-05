import { IApiService } from './i-api-service';
import { CaseDataDetailServiceTypes as SvcDef } from '../api-interface/CaseDataDetailService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseDataDetailService = SvcDef.ICaseDataDetailService;
export declare class CaseDataDetailService implements ICaseDataDetailService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    Search(request: Requests.Search): Promise<Responses.Search>;
    SearchObject(request: Requests.SearchObject): Promise<Responses.SearchObject>;
    Update(request: Requests.Update): Promise<Responses.Update>;
    UpdateLock(request: Requests.UpdateLock): Promise<Responses.UpdateLock>;
    WIPAdd(request: Requests.WIPAdd): Promise<Responses.Add>;
}
