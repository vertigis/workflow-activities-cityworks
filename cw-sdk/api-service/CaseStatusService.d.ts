import { IApiService } from './i-api-service';
import { CaseStatusServiceTypes as SvcDef } from '../api-interface/CaseStatusService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseStatusService = SvcDef.ICaseStatusService;
export declare class CaseStatusService implements ICaseStatusService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
}
