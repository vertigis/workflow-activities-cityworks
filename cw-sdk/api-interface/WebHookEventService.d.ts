import { QueueMessage } from '../core/types/QueueMessage';
import { ServiceTypes } from '../core/service-types';
export declare namespace WebHookEventServiceTypes {
    namespace Requests {
        interface ProcessMessages extends ServiceTypes.CoreRequestBase {
            Delete?: boolean;
            Ids: number[];
        }
    }
    namespace Responses {
        interface ProcessMessages extends ServiceTypes.CoreResponseBase_<QueueMessage[]> {
        }
    }
    interface IWebHookEventService {
        ProcessMessages?: (request: Requests.ProcessMessages) => Promise<Responses.ProcessMessages>;
    }
}
