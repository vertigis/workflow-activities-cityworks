import { IApiService } from './i-api-service';
import { CaseDataGroupServiceTypes as SvcDef } from '../api-interface/CaseDataGroupService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseDataGroupService = SvcDef.ICaseDataGroupService;
export declare class CaseDataGroupService implements ICaseDataGroupService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    AddDefault(request: Requests.AddDefault): Promise<Responses.AddDefault>;
    ByCaObjectId(request: Requests.ByCaObjectId): Promise<Responses.ByCaObjectId>;
    CheckGISChanges(request: Requests.CheckGISChanges): Promise<Responses.CheckGISChanges>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): Promise<Responses.DeleteByCaObjectId>;
    Search(request: Requests.Search): Promise<Responses.Search>;
    UpdateFromAsset(request: Requests.UpdateFromAsset): Promise<Responses.UpdateFromAsset>;
}
