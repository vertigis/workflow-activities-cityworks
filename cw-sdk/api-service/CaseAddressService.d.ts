import { IApiService } from './i-api-service';
import { CaseAddressServiceTypes as SvcDef } from '../api-interface/CaseAddressService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseAddressService = SvcDef.ICaseAddressService;
export declare class CaseAddressService implements ICaseAddressService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    ByCaObjectId(request: Requests.ByCaObjectId): Promise<Responses.ByCaObjectId>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): Promise<Responses.DeleteByCaObjectId>;
    Search(request: Requests.Search): Promise<Responses.Search>;
    SearchObject(request: Requests.SearchObject): Promise<Responses.SearchObject>;
}
