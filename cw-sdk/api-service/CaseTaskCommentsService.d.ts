import { IApiService } from './i-api-service';
import { CaseTaskCommentsServiceTypes as SvcDef } from '../api-interface/CaseTaskCommentsService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseTaskCommentsService = SvcDef.ICaseTaskCommentsService;
export declare class CaseTaskCommentsService implements ICaseTaskCommentsService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    ByCaTaskId(request: Requests.ByCaTaskId): Promise<Responses.ByCaTaskId>;
    ByCaTaskIds(request: Requests.ByCaTaskIds): Promise<Responses.ByCaTaskIds>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    Update(request: Requests.Update): Promise<Responses.Update>;
}
