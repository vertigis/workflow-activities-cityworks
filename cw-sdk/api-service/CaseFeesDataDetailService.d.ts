import { IApiService } from './i-api-service';
import { CaseFeesDataDetailServiceTypes as SvcDef } from '../api-interface/CaseFeesDataDetailService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseFeesDataDetailService = SvcDef.ICaseFeesDataDetailService;
export declare class CaseFeesDataDetailService implements ICaseFeesDataDetailService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    Search(request: Requests.Search): Promise<Responses.Search>;
}
