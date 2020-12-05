import { DepositItemBase } from '../core/types/DepositItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace DepositServiceTypes {
    namespace Requests {
        interface All extends ServiceTypes.CoreRequestBase {
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            AccountCode?: string;
            DepositCode?: string;
            DepositDesc?: string;
            DepositId?: number;
            DepositTypeId?: number;
        }
    }
    namespace Responses {
        interface All extends ServiceTypes.CoreResponseBase_obsolete_<DepositItemBase[]> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {
        }
    }
    interface IDepositService {
        All?: (request: Requests.All) => Promise<Responses.All>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
    }
}
