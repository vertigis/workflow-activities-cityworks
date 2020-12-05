import { IApiService } from './i-api-service';
import { PavementInspectionServiceTypes as SvcDef } from '../api-interface/PavementInspectionService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IPavementInspectionService = SvcDef.IPavementInspectionService;
export declare class PavementInspectionService implements IPavementInspectionService {
    private _service;
    constructor(service: IApiService);
    AddDistress(request: Requests.AddDistress): Promise<Responses.AddDistress>;
    AddSample(request: Requests.AddSample): Promise<Responses.AddSample>;
    ById(request: Requests.ById): Promise<Responses.ById>;
    ByIds(request: Requests.ByIds): Promise<Responses.ByIds>;
    CodeDesc(request: Requests.CodeDesc): Promise<Responses.CodeDesc>;
    Create(request: Requests.Create): Promise<Responses.Create>;
    CreateSearchDefinition(request: Requests.CreateSearchDefinition): Promise<Responses.CreateSearchDefinition>;
    DistressCodes(request: Requests.DistressCodes): Promise<Responses.DistressCodes>;
    Distresses(request: Requests.Distresses): Promise<Responses.Distresses>;
    Samples(request: Requests.Samples): Promise<Responses.Samples>;
    Search(request: Requests.Search): Promise<Responses.Search>;
    Update(request: Requests.Update): Promise<Responses.Update>;
    UpdateDistress(request: Requests.UpdateDistress): Promise<Responses.UpdateDistress>;
    UpdateSample(request: Requests.UpdateSample): Promise<Responses.UpdateSample>;
}
