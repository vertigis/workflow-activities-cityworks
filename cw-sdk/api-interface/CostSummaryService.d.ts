import { WorkOrderEntityCostSummary } from '../core/types/WorkOrderEntityCostSummary';
import { ServiceTypes } from '../core/service-types';
export declare namespace CostSummaryServiceTypes {
    namespace Requests {
        interface WorkOrderEntity extends ServiceTypes.CoreRequestBase {
            ObjectIds?: number[];
        }
        interface WorkOrderEntitySearch extends ServiceTypes.CoreRequestBase {
            SearchId?: number;
        }
    }
    namespace Responses {
        interface WorkOrderEntity extends ServiceTypes.CoreResponseBase_<WorkOrderEntityCostSummary[]> {
        }
        interface WorkOrderEntitySearch extends ServiceTypes.CoreResponseBase_<WorkOrderEntityCostSummary[]> {
        }
    }
    interface ICostSummaryService {
        WorkOrderEntity?: (request: Requests.WorkOrderEntity) => Promise<Responses.WorkOrderEntity>;
        WorkOrderEntitySearch?: (request: Requests.WorkOrderEntitySearch) => Promise<Responses.WorkOrderEntitySearch>;
    }
}
