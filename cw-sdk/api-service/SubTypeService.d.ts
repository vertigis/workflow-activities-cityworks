import { IApiService } from './i-api-service';
import { SubTypeServiceTypes as SvcDef } from '../api-interface/SubTypeService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ISubTypeService = SvcDef.ISubTypeService;
export declare class SubTypeService implements ISubTypeService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    Update(request: Requests.Update): Promise<Responses.Update>;
}
