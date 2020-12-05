import { IApiService } from './i-api-service';
import { CaseTypeServiceTypes as SvcDef } from '../api-interface/CaseTypeService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseTypeService = SvcDef.ICaseTypeService;
export declare class CaseTypeService implements ICaseTypeService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    GetList(request: Requests.GetList): Promise<Responses.GetList>;
    Search(request: Requests.Search): Promise<Responses.Search>;
    SearchObject(request: Requests.SearchObject): Promise<Responses.SearchObject>;
    Update(request: Requests.Update): Promise<Responses.Update>;
}
