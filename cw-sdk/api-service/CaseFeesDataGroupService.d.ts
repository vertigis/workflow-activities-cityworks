import { IApiService } from './i-api-service';
import { CaseFeesDataGroupServiceTypes as SvcDef } from '../api-interface/CaseFeesDataGroupService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseFeesDataGroupService = SvcDef.ICaseFeesDataGroupService;
export declare class CaseFeesDataGroupService implements ICaseFeesDataGroupService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    Search(request: Requests.Search): Promise<Responses.Search>;
}
