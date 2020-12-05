import { TaskResultDetailItem } from '../core/types/TaskResultDetailItem';
import { ServiceTypes } from '../core/service-types';
export declare namespace TaskResultDetailServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            ResultId?: number;
            ResultSequence?: number;
            ResultSetId?: number;
        }
        interface Update extends ServiceTypes.CoreRequestBase {
            ResultDetailId?: number;
            ResultId?: number;
            ResultSequence?: number;
            ResultSetId?: number;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<TaskResultDetailItem> {
        }
        interface Update extends ServiceTypes.CoreResponseBase_<TaskResultDetailItem> {
        }
    }
    interface ITaskResultDetailService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
    }
}
