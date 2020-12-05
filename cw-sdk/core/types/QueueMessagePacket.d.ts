import { WebHookPacket } from './WebHookPacket';
export interface QueueMessagePacket {
    SimpleHooks?: WebHookPacket[];
    TemplateHooks?: WebHookPacket[];
}
