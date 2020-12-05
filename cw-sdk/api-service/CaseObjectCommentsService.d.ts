import { IApiService } from './i-api-service';
import { CaseObjectCommentsServiceTypes as SvcDef } from '../api-interface/CaseObjectCommentsService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseObjectCommentsService = SvcDef.ICaseObjectCommentsService;
export declare class CaseObjectCommentsService implements ICaseObjectCommentsService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    ByCaObjectId(request: Requests.ByCaObjectId): Promise<Responses.ByCaObjectId>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    Update(request: Requests.Update): Promise<Responses.Update>;
}
