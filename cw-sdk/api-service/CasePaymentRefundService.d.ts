import { IApiService } from './i-api-service';
import { CasePaymentRefundServiceTypes as SvcDef } from '../api-interface/CasePaymentRefundService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICasePaymentRefundService = SvcDef.ICasePaymentRefundService;
export declare class CasePaymentRefundService implements ICasePaymentRefundService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    Search(request: Requests.Search): Promise<Responses.Search>;
    Update(request: Requests.Update): Promise<Responses.Update>;
}
