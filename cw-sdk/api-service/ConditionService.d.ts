import { IApiService } from './i-api-service';
import { ConditionServiceTypes as SvcDef } from '../api-interface/ConditionService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IConditionService = SvcDef.IConditionService;
export declare class ConditionService implements IConditionService {
    private _service;
    constructor(service: IApiService);
    Current(request: Requests.Current): Promise<Responses.Current>;
    History(request: Requests.History): Promise<Responses.History>;
}
