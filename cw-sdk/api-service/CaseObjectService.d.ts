import { IApiService } from './i-api-service';
import { CaseObjectServiceTypes as SvcDef } from '../api-interface/CaseObjectService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseObjectService = SvcDef.ICaseObjectService;
export declare class CaseObjectService implements ICaseObjectService {
    private _service;
    constructor(service: IApiService);
    ByIds(request: Requests.ByIds): Promise<Responses.ByIds>;
    CreateCaseFromServiceRequest(request: Requests.CreateCaseFromServiceRequest): Promise<Responses.CreateCase>;
    DeleteCase(request: Requests.DeleteCase): Promise<Responses.DeleteCase>;
    Move(request: Requests.Move): Promise<Responses.Move>;
    Search(request: Requests.Search): Promise<Responses.Search>;
}
