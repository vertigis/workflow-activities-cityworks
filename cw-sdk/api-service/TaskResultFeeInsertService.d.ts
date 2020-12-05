import { IApiService } from './i-api-service';
import { TaskResultFeeInsertServiceTypes as SvcDef } from '../api-interface/TaskResultFeeInsertService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ITaskResultFeeInsertService = SvcDef.ITaskResultFeeInsertService;
export declare class TaskResultFeeInsertService implements ITaskResultFeeInsertService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    DeleteByTaskId(request: Requests.DeleteByTaskId): Promise<Responses.DeleteByTaskId>;
    Update(request: Requests.Update): Promise<Responses.Update>;
}
