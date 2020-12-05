import { ConditionHistory } from '../core/types/ConditionHistory';
import { ConditionScore } from '../core/types/ConditionScore';
import { ServiceTypes } from '../core/service-types';
export declare namespace ConditionServiceTypes {
    namespace Requests {
        interface Current extends ServiceTypes.CoreRequestBase {
            EntityType: string;
            EntityUids: string[];
        }
        interface History extends ServiceTypes.CoreRequestBase {
            EntityType: string;
            EntityUids: string[];
            IncludeConditionScore?: boolean;
            IncludeCustomScore?: boolean;
            IncludeMaintenanceScore?: boolean;
        }
    }
    namespace Responses {
        interface Current extends ServiceTypes.CoreResponseBase_<ConditionScore[]> {
        }
        interface History extends ServiceTypes.CoreResponseBase_<{
            [key: string]: ConditionHistory[];
        }> {
        }
    }
    interface IConditionService {
        Current?: (request: Requests.Current) => Promise<Responses.Current>;
        History?: (request: Requests.History) => Promise<Responses.History>;
    }
}
