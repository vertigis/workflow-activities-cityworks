import { IApiService } from './i-api-service';
import { TenderTypeServiceTypes as SvcDef } from '../api-interface/TenderTypeService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ITenderTypeService = SvcDef.ITenderTypeService;
export declare class TenderTypeService implements ITenderTypeService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    Update(request: Requests.Update): Promise<Responses.Update>;
}
