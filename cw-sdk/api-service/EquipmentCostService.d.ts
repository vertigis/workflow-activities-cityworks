import { IApiService } from './i-api-service';
import { EquipmentCostServiceTypes as SvcDef } from '../api-interface/EquipmentCostService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IEquipmentCostService = SvcDef.IEquipmentCostService;
export declare class EquipmentCostService implements IEquipmentCostService {
    private _service;
    constructor(service: IApiService);
    AddWorkOrderCosts(request: Requests.AddWorkOrderCosts): Promise<Responses.AddWorkOrderCosts>;
    DeleteWorkOrderCosts(request: Requests.DeleteWorkOrderCosts): Promise<Responses.DeleteWorkOrderCosts>;
    WorkOrderCostsByWorkOrder(request: Requests.WorkOrderCostsByWorkOrder): Promise<Responses.WorkOrderCostsByWorkOrder>;
}
