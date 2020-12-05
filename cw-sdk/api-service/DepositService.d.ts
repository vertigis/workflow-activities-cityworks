import { IApiService } from './i-api-service';
import { DepositServiceTypes as SvcDef } from '../api-interface/DepositService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IDepositService = SvcDef.IDepositService;
export declare class DepositService implements IDepositService {
    private _service;
    constructor(service: IApiService);
    All(request: Requests.All): Promise<Responses.All>;
    Search(request: Requests.Search): Promise<Responses.Search>;
}
