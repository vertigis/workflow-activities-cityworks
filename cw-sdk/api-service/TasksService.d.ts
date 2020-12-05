import { IApiService } from './i-api-service';
import { TasksServiceTypes as SvcDef } from '../api-interface/TasksService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ITasksService = SvcDef.ITasksService;
export declare class TasksService implements ITasksService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    ById(request: Requests.ById): Promise<Responses.ById>;
    ByWorkOrder(request: Requests.ByWorkOrder): Promise<Responses.ByWorkOrder>;
    ByWorkOrderTemplate(request: Requests.ByWorkOrderTemplate): Promise<Responses.ByWorkOrderTemplate>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    Keywords(request: Requests.Keywords): Promise<Responses.Keywords>;
    Statuses(request: Requests.Statuses): Promise<Responses.Statuses>;
    TaskCodes(request: Requests.TaskCodes): Promise<Responses.TaskCodes>;
    TaskNodes(request: Requests.TaskNodes): Promise<Responses.TaskNodes>;
    Template(request: Requests.Template): Promise<Responses.Template>;
    Templates(request: Requests.Templates): Promise<Responses.Templates>;
    Update(request: Requests.Update): Promise<Responses.Update>;
}
