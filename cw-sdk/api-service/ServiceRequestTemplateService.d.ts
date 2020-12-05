import { IApiService } from './i-api-service';
import { ServiceRequestTemplateServiceTypes as SvcDef } from '../api-interface/ServiceRequestTemplateService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IServiceRequestTemplateService = SvcDef.IServiceRequestTemplateService;
export declare class ServiceRequestTemplateService implements IServiceRequestTemplateService {
    private _service;
    constructor(service: IApiService);
    ByIds(request: Requests.ByIds): Promise<Responses.ByIds>;
    CreateSearchDefinition(request: Requests.CreateSearchDefinition): Promise<Responses.CreateSearchDefinition>;
    QA(request: Requests.QA): Promise<Responses.QA>;
    Search(request: Requests.Search): Promise<Responses.Search>;
    Templates(request: Requests.Templates): Promise<Responses.Templates>;
    WorkOrderTemplates(request: Requests.WorkOrderTemplates): Promise<Responses.WorkOrderTemplates>;
}
