import { IApiService } from './i-api-service';
import { MessageQueueServiceTypes as SvcDef } from '../api-interface/MessageQueueService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IMessageQueueService = SvcDef.IMessageQueueService;
export declare class MessageQueueService implements IMessageQueueService {
    private _service;
    constructor(service: IApiService);
    ByIds(request: Requests.ByIds): Promise<Responses.ByIds>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    Preferences(request: Requests.Preferences): Promise<Responses.Preferences>;
    Search(request: Requests.Search): Promise<Responses.Search>;
    Update(request: Requests.Update): Promise<Responses.Update>;
    UpdateMessageStatus(request: Requests.UpdateMessageStatus): Promise<Responses.UpdateMessageStatus>;
    WebHooks(request: Requests.WebHooks): Promise<Responses.WebHooks>;
}
