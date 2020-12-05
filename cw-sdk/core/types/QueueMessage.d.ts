import { QueueStatus } from './QueueStatus';
import { QueueMessageBase } from './QueueMessageBase';
export interface QueueMessage extends QueueMessageBase {
    HookId?: number;
    Id?: number;
    Result?: string;
    Status?: QueueStatus;
}
