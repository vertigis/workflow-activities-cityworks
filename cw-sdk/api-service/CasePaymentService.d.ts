import { IApiService } from './i-api-service';
import { CasePaymentServiceTypes as SvcDef } from '../api-interface/CasePaymentService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICasePaymentService = SvcDef.ICasePaymentService;
export declare class CasePaymentService implements ICasePaymentService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    AddDeposit(request: Requests.AddDeposit): Promise<Responses.AddDeposit>;
    ByCaObjectId(request: Requests.ByCaObjectId): Promise<Responses.ByCaObjectId>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): Promise<Responses.DeleteByCaObjectId>;
    Search(request: Requests.Search): Promise<Responses.Search>;
}
