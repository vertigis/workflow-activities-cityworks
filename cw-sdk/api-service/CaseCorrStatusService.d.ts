import { IApiService } from './i-api-service';
import { CaseCorrStatusServiceTypes as SvcDef } from '../api-interface/CaseCorrStatusService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseCorrStatusService = SvcDef.ICaseCorrStatusService;
export declare class CaseCorrStatusService implements ICaseCorrStatusService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    ByCaCorrectionsIds(request: Requests.ByCaCorrectionsIds): Promise<Responses.ByCaCorrectionsIds>;
    Search(request: Requests.Search): Promise<Responses.Search>;
}
