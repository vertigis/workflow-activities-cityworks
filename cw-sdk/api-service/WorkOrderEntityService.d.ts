import { IApiService } from './i-api-service';
import { WorkOrderEntityServiceTypes as SvcDef } from '../api-interface/WorkOrderEntityService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IWorkOrderEntityService = SvcDef.IWorkOrderEntityService;
export declare class WorkOrderEntityService implements IWorkOrderEntityService {
    private _service;
    constructor(service: IApiService);
    ByIds(request: Requests.ByIds): Promise<Responses.ByIds>;
    CreateSearchDefinition(request: Requests.CreateSearchDefinition): Promise<Responses.CreateSearchDefinition>;
    Search(request: Requests.Search): Promise<Responses.Search>;
}
