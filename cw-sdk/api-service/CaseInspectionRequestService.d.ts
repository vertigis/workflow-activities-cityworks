import { IApiService } from './i-api-service';
import { CaseInspectionRequestServiceTypes as SvcDef } from '../api-interface/CaseInspectionRequestService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseInspectionRequestService = SvcDef.ICaseInspectionRequestService;
export declare class CaseInspectionRequestService implements ICaseInspectionRequestService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    ByCaObjectId(request: Requests.ByCaObjectId): Promise<Responses.ByCaObjectId>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): Promise<Responses.DeleteByCaObjectId>;
    Search(request: Requests.Search): Promise<Responses.Search>;
}
