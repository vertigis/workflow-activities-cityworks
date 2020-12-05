import { CaseStatusItem } from '../core/types/CaseStatusItem';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseStatusServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            CaseStatus: string;
            ExpiredFlag?: string;
            StatusCode: string;
            StatusDesc?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<CaseStatusItem> {
        }
    }
    interface ICaseStatusService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
    }
}
