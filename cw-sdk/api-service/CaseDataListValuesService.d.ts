import { IApiService } from './i-api-service';
import { CaseDataListValuesServiceTypes as SvcDef } from '../api-interface/CaseDataListValuesService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseDataListValuesService = SvcDef.ICaseDataListValuesService;
export declare class CaseDataListValuesService implements ICaseDataListValuesService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    Search(request: Requests.Search): Promise<Responses.Search>;
    SearchObject(request: Requests.SearchObject): Promise<Responses.SearchObject>;
}
