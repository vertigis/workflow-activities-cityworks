import { IApiService } from './i-api-service';
import { CustomerCallServiceTypes as SvcDef } from '../api-interface/CustomerCallService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICustomerCallService = SvcDef.ICustomerCallService;
export declare class CustomerCallService implements ICustomerCallService {
    private _service;
    constructor(service: IApiService);
    AddToRequest(request: Requests.AddToRequest): Promise<Responses.AddToRequest>;
    ByIncidentNum(request: Requests.ByIncidentNum): Promise<Responses.ByIncidentNum>;
    ByRequestId(request: Requests.ByRequestId): Promise<Responses.ByRequestId>;
    ByRequestIds(request: Requests.ByRequestIds): Promise<Responses.ByRequestIds>;
    CallerQuestions(request: Requests.CallerQuestions): Promise<Responses.CallerQuestions>;
    CallerQuestionsByRequestIds(request: Requests.CallerQuestionsByRequestIds): Promise<Responses.CallerQuestionsByRequestIds>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    Move(request: Requests.Move): Promise<Responses.Move>;
    MoveToRequest(request: Requests.MoveToRequest): Promise<Responses.MoveToRequest>;
    Update(request: Requests.Update): Promise<Responses.Update>;
}
