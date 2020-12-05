import { IApiService } from './i-api-service';
import { CaseFlagsServiceTypes as SvcDef } from '../api-interface/CaseFlagsService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseFlagsService = SvcDef.ICaseFlagsService;
export declare class CaseFlagsService implements ICaseFlagsService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    ByCaObjectId(request: Requests.ByCaObjectId): Promise<Responses.ByCaObjectId>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): Promise<Responses.DeleteByCaObjectId>;
    Search(request: Requests.Search): Promise<Responses.Search>;
}
