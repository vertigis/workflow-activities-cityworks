import { EquipmentCost } from '../core/types/EquipmentCost';
import { WorkOrderEntity } from '../core/types/WorkOrderEntity';
import { ServiceTypes } from '../core/service-types';
export declare namespace EquipmentCostServiceTypes {
    namespace Requests {
        interface AddWorkOrderCosts extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            ContractorEquipmentCost?: number;
            ContractorEquipmentDescription?: string;
            ContractorEquipmentId?: string;
            ContractorSids?: number[];
            Entities?: WorkOrderEntity[];
            EquipmentSids?: number[];
            Estimated?: boolean;
            FinishDate?: Date;
            Hours?: number;
            StartDate?: Date;
            TaskIds?: number[];
            Units?: number;
            WorkOrderId: string;
            WorkOrderSid: number;
        }
        interface DeleteWorkOrderCosts extends ServiceTypes.CoreRequestBase {
            EquipmentCostIds: number[];
            Estimated?: boolean;
        }
        interface WorkOrderCostsByWorkOrder extends ServiceTypes.CoreRequestBase {
            Estimated?: boolean;
            WorkOrderIds: string[];
            WorkOrderSids: number[];
        }
    }
    namespace Responses {
        interface AddWorkOrderCosts extends ServiceTypes.CoreResponseBase_<EquipmentCost[]> {
        }
        interface DeleteWorkOrderCosts extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface WorkOrderCostsByWorkOrder extends ServiceTypes.CoreResponseBase_<EquipmentCost[]> {
        }
    }
    interface IEquipmentCostService {
        AddWorkOrderCosts?: (request: Requests.AddWorkOrderCosts) => Promise<Responses.AddWorkOrderCosts>;
        DeleteWorkOrderCosts?: (request: Requests.DeleteWorkOrderCosts) => Promise<Responses.DeleteWorkOrderCosts>;
        WorkOrderCostsByWorkOrder?: (request: Requests.WorkOrderCostsByWorkOrder) => Promise<Responses.WorkOrderCostsByWorkOrder>;
    }
}
