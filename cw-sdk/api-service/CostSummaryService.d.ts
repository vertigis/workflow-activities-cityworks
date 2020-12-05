import { IApiService } from './i-api-service';
import { CostSummaryServiceTypes as SvcDef } from '../api-interface/CostSummaryService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICostSummaryService = SvcDef.ICostSummaryService;
export declare class CostSummaryService implements ICostSummaryService {
    private _service;
    constructor(service: IApiService);
    WorkOrderEntity(request: Requests.WorkOrderEntity): Promise<Responses.WorkOrderEntity>;
    WorkOrderEntitySearch(request: Requests.WorkOrderEntitySearch): Promise<Responses.WorkOrderEntitySearch>;
}
