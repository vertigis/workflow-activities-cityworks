import { IApiService } from './i-api-service';
import { GeneralCommentsServiceTypes as SvcDef } from '../api-interface/GeneralCommentsService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IGeneralCommentsService = SvcDef.IGeneralCommentsService;
export declare class GeneralCommentsService implements IGeneralCommentsService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
}
