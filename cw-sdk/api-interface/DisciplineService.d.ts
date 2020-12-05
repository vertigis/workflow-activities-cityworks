import { DisciplineItem } from '../core/types/DisciplineItem';
import { ServiceTypes } from '../core/service-types';
export declare namespace DisciplineServiceTypes {
    namespace Requests {
        interface All extends ServiceTypes.CoreRequestBase {
        }
    }
    namespace Responses {
        interface All extends ServiceTypes.CoreResponseBase_obsolete_<DisciplineItem[]> {
        }
    }
    interface IDisciplineService {
        All?: (request: Requests.All) => Promise<Responses.All>;
    }
}
