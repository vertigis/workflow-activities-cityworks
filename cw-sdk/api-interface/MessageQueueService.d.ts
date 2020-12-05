import { WebHookBase } from '../core/types/WebHookBase';
import { GlobalPreference } from '../core/types/GlobalPreference';
import { QueueMessage } from '../core/types/QueueMessage';
import { ActionType } from '../core/types/ActionType';
import { QueueStatus } from '../core/types/QueueStatus';
import { ServiceTypes } from '../core/service-types';
export declare namespace MessageQueueServiceTypes {
    namespace Requests {
        interface ByIds extends ServiceTypes.CoreRequestBase {
            Ids?: number[];
            MaxCount?: number;
            Status?: QueueStatus;
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            HoursToKeep?: number;
            Ids?: number[];
            Status?: QueueStatus;
        }
        interface Preferences extends ServiceTypes.CoreRequestBase {
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            DateCreatedBegin?: Date;
            DateCreatedEnd?: Date;
            DateUpdatedBegin?: Date;
            DateUpdatedEnd?: Date;
            HookId?: number[];
            HookType?: string[];
            Id?: number[];
            MaxResults?: number;
            Result?: string[];
            Status?: string[];
        }
        interface Update extends ServiceTypes.CoreRequestBase {
            HookId?: number;
            HookType?: ActionType;
            Id?: number;
            Packet?: string;
            Result?: string;
            Status?: QueueStatus;
        }
        interface UpdateMessageStatus extends ServiceTypes.CoreRequestBase {
            Ids?: number[];
            Status?: QueueStatus;
        }
        interface WebHooks extends ServiceTypes.CoreRequestBase {
            HookIds?: number[];
        }
    }
    namespace Responses {
        interface ByIds extends ServiceTypes.CoreResponseBase_<QueueMessage[]> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface Preferences extends ServiceTypes.CoreResponseBase_<GlobalPreference[]> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_<number[]> {
        }
        interface Update extends ServiceTypes.CoreResponseBase_<QueueMessage> {
        }
        interface UpdateMessageStatus extends ServiceTypes.CoreResponseBase_<boolean> {
        }
        interface WebHooks extends ServiceTypes.CoreResponseBase_<WebHookBase[]> {
        }
    }
    interface IMessageQueueService {
        ByIds?: (request: Requests.ByIds) => Promise<Responses.ByIds>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        Preferences?: (request: Requests.Preferences) => Promise<Responses.Preferences>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
        UpdateMessageStatus?: (request: Requests.UpdateMessageStatus) => Promise<Responses.UpdateMessageStatus>;
        WebHooks?: (request: Requests.WebHooks) => Promise<Responses.WebHooks>;
    }
}
