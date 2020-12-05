import { IApiService } from './i-api-service';
import { PluginLayoutServiceTypes as SvcDef } from '../api-interface/PluginLayoutService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IPluginLayoutService = SvcDef.IPluginLayoutService;
export declare class PluginLayoutService implements IPluginLayoutService {
    private _service;
    constructor(service: IApiService);
    Definition(request: Requests.Definition): Promise<Responses.Definition>;
    Definitions(request: Requests.Definitions): Promise<Responses.Definitions>;
    Public(request: Requests.Public): Promise<Responses.Definition>;
    PublicDefinitions(request: Requests.PublicDefinitions): Promise<Responses.Definitions>;
}
