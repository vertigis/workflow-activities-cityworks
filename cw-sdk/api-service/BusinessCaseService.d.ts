import { IApiService } from './i-api-service';
import { BusinessCaseServiceTypes as SvcDef } from '../api-interface/BusinessCaseService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IBusinessCaseService = SvcDef.IBusinessCaseService;
export declare class BusinessCaseService implements IBusinessCaseService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    Update(request: Requests.Update): Promise<Responses.Update>;
}
