import { IApiService } from './i-api-service';
import { MaterialServiceTypes as SvcDef } from '../api-interface/MaterialService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IMaterialService = SvcDef.IMaterialService;
export declare class MaterialService implements IMaterialService {
    private _service;
    constructor(service: IApiService);
    All(request: Requests.All): Promise<Responses.All>;
    ById(request: Requests.ById): Promise<Responses.ById>;
    ByIds(request: Requests.ByIds): Promise<Responses.ByIds>;
    ByParent(request: Requests.ByParent): Promise<Responses.ByParent>;
    ByStoreroom(request: Requests.ByStoreroom): Promise<Responses.ByStoreroom>;
    ByStoreroomAndId(request: Requests.ByStoreroomAndId): Promise<Responses.ByStoreroomAndId>;
    Keywords(request: Requests.Keywords): Promise<Responses.Keywords>;
    MaterialBom(request: Requests.MaterialBom): Promise<Responses.MaterialBom>;
    MaterialCategories(request: Requests.MaterialCategories): Promise<Responses.MaterialCategories>;
    MaterialNodes(request: Requests.MaterialNodes): Promise<Responses.MaterialNodes>;
    Search(request: Requests.Search): Promise<Responses.Search>;
}
