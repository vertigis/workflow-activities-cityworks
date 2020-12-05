import { FeeSetupItemBase } from '../core/types/FeeSetupItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace FeeSetupServiceTypes {
    namespace Requests {
        interface All extends ServiceTypes.CoreRequestBase {
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            AccountCode?: string;
            FeeCode?: string;
            FeeDesc?: string;
            FeeSetupId?: number;
            FeeTypeId?: number;
        }
    }
    namespace Responses {
        interface All extends ServiceTypes.CoreResponseBase_obsolete_<FeeSetupItemBase[]> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {
        }
    }
    interface IFeeSetupService {
        All?: (request: Requests.All) => Promise<Responses.All>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
    }
}
