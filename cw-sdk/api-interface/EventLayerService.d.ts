import { EventLayer } from '../core/types/EventLayer';
import { ServiceTypes } from '../core/service-types';
export declare namespace EventLayerServiceTypes {
    namespace Requests {
        interface All extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            EmployeeSid?: number;
            IncludeDisabled?: boolean;
        }
        interface ById extends ServiceTypes.CoreRequestBase {
            EventLayerId: number;
        }
    }
    namespace Responses {
        interface All extends ServiceTypes.CoreResponseBase_<EventLayer[]> {
        }
        interface ById extends ServiceTypes.CoreResponseBase_<EventLayer> {
        }
    }
    interface IEventLayerService {
        All?: (request: Requests.All) => Promise<Responses.All>;
        ById?: (request: Requests.ById) => Promise<Responses.ById>;
    }
}
