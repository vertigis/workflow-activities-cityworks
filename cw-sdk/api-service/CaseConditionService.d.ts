import { IApiService } from './i-api-service';
import { CaseConditionServiceTypes as SvcDef } from '../api-interface/CaseConditionService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseConditionService = SvcDef.ICaseConditionService;
export declare class CaseConditionService implements ICaseConditionService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    ByCaObjectId(request: Requests.ByCaObjectId): Promise<Responses.ByCaObjectId>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): Promise<Responses.DeleteByCaObjectId>;
    Search(request: Requests.Search): Promise<Responses.Search>;
    SearchObject(request: Requests.SearchObject): Promise<Responses.SearchObject>;
}
