import { IApiService } from './i-api-service';
import { CaseCorrectionsServiceTypes as SvcDef } from '../api-interface/CaseCorrectionsService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseCorrectionsService = SvcDef.ICaseCorrectionsService;
export declare class CaseCorrectionsService implements ICaseCorrectionsService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    ByCaTaskIds(request: Requests.ByCaTaskIds): Promise<Responses.ByCaTaskIds>;
    Search(request: Requests.Search): Promise<Responses.Search>;
    Update(request: Requests.Update): Promise<Responses.Update>;
}
