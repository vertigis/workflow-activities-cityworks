import { MaterialCost } from '../core/types/MaterialCost';
import { WorkOrderEntity } from '../core/types/WorkOrderEntity';
import { ServiceTypes } from '../core/service-types';
export declare namespace MaterialCostServiceTypes {
    namespace Requests {
        interface AddWorkOrderCosts extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            CombineIssuesByMaterialSid?: boolean;
            ContractorMaterialCost?: number;
            ContractorMaterialDescription?: string;
            ContractorMaterialId?: string;
            ContractorSids?: number[];
            Entities?: WorkOrderEntity[];
            Estimated?: boolean;
            MaterialSids?: number[];
            Source?: string;
            TaskIds?: number[];
            TransDate?: Date;
            Units: number;
            WorkOrderId: string;
            WorkOrderSid: number;
        }
        interface DeleteWorkOrderCosts extends ServiceTypes.CoreRequestBase {
            Estimated?: boolean;
            MaterialCostIds: number[];
        }
        interface WorkOrderCostsByWorkOrder extends ServiceTypes.CoreRequestBase {
            Estimated?: boolean;
            WorkOrderIds: string[];
            WorkOrderSids: number[];
        }
    }
    namespace Responses {
        interface AddWorkOrderCosts extends ServiceTypes.CoreResponseBase_<MaterialCost[]> {
        }
        interface DeleteWorkOrderCosts extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface WorkOrderCostsByWorkOrder extends ServiceTypes.CoreResponseBase_<MaterialCost[]> {
        }
    }
    interface IMaterialCostService {
        AddWorkOrderCosts?: (request: Requests.AddWorkOrderCosts) => Promise<Responses.AddWorkOrderCosts>;
        DeleteWorkOrderCosts?: (request: Requests.DeleteWorkOrderCosts) => Promise<Responses.DeleteWorkOrderCosts>;
        WorkOrderCostsByWorkOrder?: (request: Requests.WorkOrderCostsByWorkOrder) => Promise<Responses.WorkOrderCostsByWorkOrder>;
    }
}
