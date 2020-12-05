import { IApiService } from './i-api-service';
import { CaseNotesServiceTypes as SvcDef } from '../api-interface/CaseNotesService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseNotesService = SvcDef.ICaseNotesService;
export declare class CaseNotesService implements ICaseNotesService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    ByCaObjectId(request: Requests.ByCaObjectId): Promise<Responses.ByCaObjectId>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): Promise<Responses.DeleteByCaObjectId>;
    Search(request: Requests.Search): Promise<Responses.Search>;
}
