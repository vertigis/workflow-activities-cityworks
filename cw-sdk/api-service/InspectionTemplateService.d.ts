import { IApiService } from './i-api-service';
import { InspectionTemplateServiceTypes as SvcDef } from '../api-interface/InspectionTemplateService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IInspectionTemplateService = SvcDef.IInspectionTemplateService;
export declare class InspectionTemplateService implements IInspectionTemplateService {
    private _service;
    constructor(service: IApiService);
    ByIds(request: Requests.ByIds): Promise<Responses.ByIds>;
    CreateSearchDefinition(request: Requests.CreateSearchDefinition): Promise<Responses.CreateSearchDefinition>;
    EntityTypes(request: Requests.EntityTypes): Promise<Responses.EntityTypes>;
    QA(request: Requests.QA): Promise<Responses.QA>;
    Search(request: Requests.Search): Promise<Responses.Search>;
    Templates(request: Requests.Templates): Promise<Responses.Templates>;
    TestTypes(request: Requests.TestTypes): Promise<Responses.TestTypes>;
}
