import { IApiService } from './i-api-service';
import { CaseAssetServiceTypes as SvcDef } from '../api-interface/CaseAssetService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseAssetService = SvcDef.ICaseAssetService;
export declare class CaseAssetService implements ICaseAssetService {
    private _service;
    constructor(service: IApiService);
    ByCaObjectId(request: Requests.ByCaObjectId): Promise<Responses.ByCaObjectId>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): Promise<Responses.DeleteByCaObjectId>;
    Search(request: Requests.Search): Promise<Responses.Search>;
    SearchObject(request: Requests.SearchObject): Promise<Responses.SearchObject>;
}
