import { IApiService } from './i-api-service';
import { CaseServiceTypes as SvcDef } from '../api-interface/CaseService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseService = SvcDef.ICaseService;
export declare class CaseService implements ICaseService {
    private _service;
    constructor(service: IApiService);
    Create(request: Requests.Create): Promise<Responses.Create>;
    CreateChild(request: Requests.CreateChild): Promise<Responses.CreateChild>;
}
