import { IApiService } from './i-api-service';
import { WorkOrderTemplateServiceTypes as SvcDef } from '../api-interface/WorkOrderTemplateService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IWorkOrderTemplateService = SvcDef.IWorkOrderTemplateService;
export declare class WorkOrderTemplateService implements IWorkOrderTemplateService {
    private _service;
    constructor(service: IApiService);
    ByIds(request: Requests.ByIds): Promise<Responses.ByIds>;
    ByProblemSids(request: Requests.ByProblemSids): Promise<Responses.ByProblemSids>;
    CustomFieldCategories(request: Requests.CustomFieldCategories): Promise<Responses.CustomFieldCategories>;
    CustomFields(request: Requests.CustomFields): Promise<Responses.CustomFields>;
    Search(request: Requests.Search): Promise<Responses.Search>;
    TemplateInspections(request: Requests.TemplateInspections): Promise<Responses.TemplateInspections>;
    TemplateNames(request: Requests.TemplateNames): Promise<Responses.TemplateNames>;
}
