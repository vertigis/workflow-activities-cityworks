import { IApiService } from './i-api-service';
import { WebHookEventServiceTypes as SvcDef } from '../api-interface/WebHookEventService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IWebHookEventService = SvcDef.IWebHookEventService;
export declare class WebHookEventService implements IWebHookEventService {
    private _service;
    constructor(service: IApiService);
    ProcessMessages(request: Requests.ProcessMessages): Promise<Responses.ProcessMessages>;
}
