import { IApiService } from './i-api-service';
import { CaseTaskResultsServiceTypes as SvcDef } from '../api-interface/CaseTaskResultsService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseTaskResultsService = SvcDef.ICaseTaskResultsService;
export declare class CaseTaskResultsService implements ICaseTaskResultsService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    ByCaTaskIds(request: Requests.ByCaTaskIds): Promise<Responses.ByCaTaskIds>;
    SearchObject(request: Requests.SearchObject): Promise<Responses.SearchObject>;
}
