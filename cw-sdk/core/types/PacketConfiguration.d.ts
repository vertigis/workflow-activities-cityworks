import { WebHookPacketModel } from './WebHookPacketModel';
import { PacketCredential } from './PacketCredential';
export interface PacketConfiguration {
    Credential?: PacketCredential;
    EpochDates?: boolean;
    HeaderData?: string;
    Model?: WebHookPacketModel;
    Referer?: string;
    Template?: string;
    Urgent?: boolean;
}
