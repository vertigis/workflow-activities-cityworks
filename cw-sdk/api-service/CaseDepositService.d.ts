import { IApiService } from './i-api-service';
import { CaseDepositServiceTypes as SvcDef } from '../api-interface/CaseDepositService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseDepositService = SvcDef.ICaseDepositService;
export declare class CaseDepositService implements ICaseDepositService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    AddDefault(request: Requests.AddDefault): Promise<Responses.AddDefault>;
    ByCaObjectId(request: Requests.ByCaObjectId): Promise<Responses.ByCaObjectId>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): Promise<Responses.DeleteByCaObjectId>;
    Search(request: Requests.Search): Promise<Responses.Search>;
}
