import { IApiService } from './i-api-service';
import { EventLayerServiceTypes as SvcDef } from '../api-interface/EventLayerService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IEventLayerService = SvcDef.IEventLayerService;
export declare class EventLayerService implements IEventLayerService {
    private _service;
    constructor(service: IApiService);
    All(request: Requests.All): Promise<Responses.All>;
    ById(request: Requests.ById): Promise<Responses.ById>;
}
