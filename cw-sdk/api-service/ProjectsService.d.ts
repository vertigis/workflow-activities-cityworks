import { IApiService } from './i-api-service';
import { ProjectsServiceTypes as SvcDef } from '../api-interface/ProjectsService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IProjectsService = SvcDef.IProjectsService;
export declare class ProjectsService implements IProjectsService {
    private _service;
    constructor(service: IApiService);
    ByContractIds(request: Requests.ByContractIds): Promise<Responses.ByContractIds>;
    ByIds(request: Requests.ByIds): Promise<Responses.ByIds>;
    Create(request: Requests.Create): Promise<Responses.Create>;
    CreateSearchDefinition(request: Requests.CreateSearchDefinition): Promise<Responses.CreateSearchDefinition>;
    QuickView(request: Requests.QuickView): Promise<Responses.QuickView>;
    Search(request: Requests.Search): Promise<Responses.Search>;
    Update(request: Requests.Update): Promise<Responses.Update>;
}
