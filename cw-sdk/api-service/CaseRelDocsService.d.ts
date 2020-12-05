import { IApiService } from './i-api-service';
import { CaseRelDocsServiceTypes as SvcDef } from '../api-interface/CaseRelDocsService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseRelDocsService = SvcDef.ICaseRelDocsService;
export declare class CaseRelDocsService implements ICaseRelDocsService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    ByCaObjectId(request: Requests.ByCaObjectId): Promise<Responses.ByCaObjectId>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): Promise<Responses.DeleteByCaObjectId>;
    GetStoragePreferences(request: Requests.GetStoragePreferences): Promise<Responses.StoragePreferences>;
    Search(request: Requests.Search): Promise<Responses.Search>;
}
