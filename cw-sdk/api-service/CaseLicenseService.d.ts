import { IApiService } from './i-api-service';
import { CaseLicenseServiceTypes as SvcDef } from '../api-interface/CaseLicenseService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseLicenseService = SvcDef.ICaseLicenseService;
export declare class CaseLicenseService implements ICaseLicenseService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    ByCaObjectId(request: Requests.ByCaObjectId): Promise<Responses.ByCaObjectId>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): Promise<Responses.DeleteByCaObjectId>;
    Search(request: Requests.Search): Promise<Responses.Search>;
}
