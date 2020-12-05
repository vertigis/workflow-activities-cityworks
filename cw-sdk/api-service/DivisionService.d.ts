import { IApiService } from './i-api-service';
import { DivisionServiceTypes as SvcDef } from '../api-interface/DivisionService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IDivisionService = SvcDef.IDivisionService;
export declare class DivisionService implements IDivisionService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
}
