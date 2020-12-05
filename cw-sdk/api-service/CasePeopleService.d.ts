import { IApiService } from './i-api-service';
import { CasePeopleServiceTypes as SvcDef } from '../api-interface/CasePeopleService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICasePeopleService = SvcDef.ICasePeopleService;
export declare class CasePeopleService implements ICasePeopleService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    ByCaObjectId(request: Requests.ByCaObjectId): Promise<Responses.ByCaObjectId>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): Promise<Responses.DeleteByCaObjectId>;
    Search(request: Requests.Search): Promise<Responses.Search>;
}
