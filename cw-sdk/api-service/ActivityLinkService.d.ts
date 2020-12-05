import { IApiService } from './i-api-service';
import { ActivityLinkServiceTypes as SvcDef } from '../api-interface/ActivityLinkService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IActivityLinkService = SvcDef.IActivityLinkService;
export declare class ActivityLinkService implements IActivityLinkService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    ByActivityIds(request: Requests.ByActivityIds): Promise<Responses.ByActivityIds>;
    ByActivitySids(request: Requests.ByActivitySids): Promise<Responses.ByActivitySids>;
    CloneByActivitySid(request: Requests.CloneByActivitySid): Promise<Responses.CloneByActivitySid>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    Remove(request: Requests.Remove): Promise<Responses.Remove>;
}
