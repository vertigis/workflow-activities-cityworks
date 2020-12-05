import { IApiService } from './i-api-service';
import { TaskResultDetailServiceTypes as SvcDef } from '../api-interface/TaskResultDetailService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ITaskResultDetailService = SvcDef.ITaskResultDetailService;
export declare class TaskResultDetailService implements ITaskResultDetailService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    Update(request: Requests.Update): Promise<Responses.Update>;
}
