import { IApiService } from './i-api-service';
import { CaseContractorServiceTypes as SvcDef } from '../api-interface/CaseContractorService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseContractorService = SvcDef.ICaseContractorService;
export declare class CaseContractorService implements ICaseContractorService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    ByCaObjectId(request: Requests.ByCaObjectId): Promise<Responses.ByCaObjectId>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): Promise<Responses.DeleteByCaObjectId>;
    Search(request: Requests.Search): Promise<Responses.Search>;
    SearchObject(request: Requests.SearchObject): Promise<Responses.SearchObject>;
}
