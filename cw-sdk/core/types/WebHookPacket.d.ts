import { EventSourceType } from './EventSourceType';
import { SourceEventType } from './SourceEventType';
import { WebHookOutputType } from './WebHookOutputType';
import { WebHookPacketModel } from './WebHookPacketModel';
import { NameValue } from './NameValue';
import { PacketCredential } from './PacketCredential';
export interface WebHookPacket {
    Credential?: PacketCredential;
    Data?: string;
    Destination?: string;
    HeaderData?: NameValue[];
    HookId?: number;
    Method?: string;
    Model?: WebHookPacketModel;
    OutputType?: WebHookOutputType;
    Referer?: string;
    SourceEvent?: SourceEventType;
    SourceType?: EventSourceType;
    Urgent?: boolean;
}
