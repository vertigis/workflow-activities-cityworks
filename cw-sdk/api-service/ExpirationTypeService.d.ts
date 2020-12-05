import { IApiService } from './i-api-service';
import { ExpirationTypeServiceTypes as SvcDef } from '../api-interface/ExpirationTypeService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IExpirationTypeService = SvcDef.IExpirationTypeService;
export declare class ExpirationTypeService implements IExpirationTypeService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
}
