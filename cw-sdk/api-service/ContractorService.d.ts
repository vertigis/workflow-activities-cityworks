import { IApiService } from './i-api-service';
import { ContractorServiceTypes as SvcDef } from '../api-interface/ContractorService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IContractorService = SvcDef.IContractorService;
export declare class ContractorService implements IContractorService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    AddKeywords(request: Requests.AddKeywords): Promise<Responses.AddKeywords>;
    All(request: Requests.All): Promise<Responses.All>;
    ById(request: Requests.ById): Promise<Responses.ById>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    DeleteKeywords(request: Requests.DeleteKeywords): Promise<Responses.DeleteKeywords>;
    Keywords(request: Requests.Keywords): Promise<Responses.Keywords>;
    Search(request: Requests.Search): Promise<Responses.Search>;
    Update(request: Requests.Update): Promise<Responses.Update>;
}
