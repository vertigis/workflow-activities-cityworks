import { IApiService } from './i-api-service';
import { LaborCostServiceTypes as SvcDef } from '../api-interface/LaborCostService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ILaborCostService = SvcDef.ILaborCostService;
export declare class LaborCostService implements ILaborCostService {
    private _service;
    constructor(service: IApiService);
    AddRequestCosts(request: Requests.AddRequestCosts): Promise<Responses.AddRequestCosts>;
    AddWorkOrderCosts(request: Requests.AddWorkOrderCosts): Promise<Responses.AddWorkOrderCosts>;
    CostCodes(request: Requests.CostCodes): Promise<Responses.CostCodes>;
    DeleteRequestCosts(request: Requests.DeleteRequestCosts): Promise<Responses.DeleteRequestCosts>;
    DeleteWorkOrderCosts(request: Requests.DeleteWorkOrderCosts): Promise<Responses.DeleteWorkOrderCosts>;
    JobCodes(request: Requests.JobCodes): Promise<Responses.JobCodes>;
    RequestCostsByRequest(request: Requests.RequestCostsByRequest): Promise<Responses.RequestCostsByRequest>;
    WorkOrderCostsByWorkOrder(request: Requests.WorkOrderCostsByWorkOrder): Promise<Responses.WorkOrderCostsByWorkOrder>;
}
