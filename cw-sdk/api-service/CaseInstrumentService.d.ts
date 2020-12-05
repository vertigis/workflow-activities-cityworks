import { IApiService } from './i-api-service';
import { CaseInstrumentServiceTypes as SvcDef } from '../api-interface/CaseInstrumentService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseInstrumentService = SvcDef.ICaseInstrumentService;
export declare class CaseInstrumentService implements ICaseInstrumentService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    ByCaObjectId(request: Requests.ByCaObjectId): Promise<Responses.ByCaObjectId>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): Promise<Responses.DeleteByCaObjectId>;
    GetList(request: Requests.GetList): Promise<Responses.GetList>;
    Search(request: Requests.Search): Promise<Responses.Search>;
}
