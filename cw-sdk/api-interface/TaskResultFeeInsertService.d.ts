import { TaskResultFeeInsertItem } from '../core/types/TaskResultFeeInsertItem';
import { ServiceTypes } from '../core/service-types';
export declare namespace TaskResultFeeInsertServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            FeeSetupId?: number;
            TaskId: number;
            TaskResultFeeInsertId: number;
            TaskResultId: number;
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            TaskResultFeeInsertId: number;
        }
        interface DeleteByTaskId extends ServiceTypes.CoreRequestBase {
            TaskId: number;
        }
        interface Update extends ServiceTypes.CoreRequestBase {
            FeeSetupId?: number;
            TaskId: number;
            TaskResultFeeInsertId: number;
            TaskResultId: number;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<TaskResultFeeInsertItem> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_<number> {
        }
        interface DeleteByTaskId extends ServiceTypes.CoreResponseBase_<number> {
        }
        interface Update extends ServiceTypes.CoreResponseBase_<TaskResultFeeInsertItem> {
        }
    }
    interface ITaskResultFeeInsertService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        DeleteByTaskId?: (request: Requests.DeleteByTaskId) => Promise<Responses.DeleteByTaskId>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
    }
}
