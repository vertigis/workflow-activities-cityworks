import { IApiService } from './i-api-service';
import { MaterialCostServiceTypes as SvcDef } from '../api-interface/MaterialCostService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IMaterialCostService = SvcDef.IMaterialCostService;
export declare class MaterialCostService implements IMaterialCostService {
    private _service;
    constructor(service: IApiService);
    AddWorkOrderCosts(request: Requests.AddWorkOrderCosts): Promise<Responses.AddWorkOrderCosts>;
    DeleteWorkOrderCosts(request: Requests.DeleteWorkOrderCosts): Promise<Responses.DeleteWorkOrderCosts>;
    WorkOrderCostsByWorkOrder(request: Requests.WorkOrderCostsByWorkOrder): Promise<Responses.WorkOrderCostsByWorkOrder>;
}
