import { IApiService } from './i-api-service';
import { FeeSetupServiceTypes as SvcDef } from '../api-interface/FeeSetupService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IFeeSetupService = SvcDef.IFeeSetupService;
export declare class FeeSetupService implements IFeeSetupService {
    private _service;
    constructor(service: IApiService);
    All(request: Requests.All): Promise<Responses.All>;
    Search(request: Requests.Search): Promise<Responses.Search>;
}
