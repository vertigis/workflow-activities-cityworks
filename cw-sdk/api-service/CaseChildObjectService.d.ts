import { IApiService } from './i-api-service';
import { CaseChildObjectServiceTypes as SvcDef } from '../api-interface/CaseChildObjectService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseChildObjectService = SvcDef.ICaseChildObjectService;
export declare class CaseChildObjectService implements ICaseChildObjectService {
    private _service;
    constructor(service: IApiService);
    ByCaObjectId(request: Requests.ByCaObjectId): Promise<Responses.ByCaObjectId>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): Promise<Responses.DeleteByCaObjectId>;
    GetList(request: Requests.GetList): Promise<Responses.GetList>;
    Search(request: Requests.Search): Promise<Responses.Search>;
    SearchObject(request: Requests.SearchObject): Promise<Responses.SearchObject>;
}
