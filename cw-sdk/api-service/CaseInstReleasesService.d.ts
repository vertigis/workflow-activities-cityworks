import { IApiService } from './i-api-service';
import { CaseInstReleasesServiceTypes as SvcDef } from '../api-interface/CaseInstReleasesService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseInstReleasesService = SvcDef.ICaseInstReleasesService;
export declare class CaseInstReleasesService implements ICaseInstReleasesService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    Search(request: Requests.Search): Promise<Responses.Search>;
}
